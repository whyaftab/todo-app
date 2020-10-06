/* eslint-disable no-case-declarations */
// Note data storage context file
import database from '@react-native-firebase/database';

import createDataContext from './createDataContext';
import {NOTE, snapshotToFlatArray} from '../constant';

// Note action types
const NOTE_REQUEST_IN_PROCESS = 'NOTE_REQUEST_IN_PROCESS';
const NOTE_REQUEST_IS_COMPLETE = 'NOTE_REQUEST_IS_COMPLETE';
const NOTE_LOAD_DATA = 'NOTE_LOAD_DATA';

// Note initial state
const initState = {
  isLoading: false,
  list: [],
};

// Note reducer
const NoteReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case NOTE_LOAD_DATA:
      return {...state, list: payload, isLoading: false};

    case NOTE_REQUEST_IN_PROCESS:
      return {...state, isLoading: true};

    case NOTE_REQUEST_IS_COMPLETE:
      return {...state, isLoading: false};

    default:
      return state;
  }
};

// action for creating note
const loadNotes = (dispatch) => () => {
  dispatch({type: NOTE_REQUEST_IN_PROCESS});
  database()
    .ref(NOTE)
    .on('value', (snapshot) => {
      dispatch({
        type: NOTE_LOAD_DATA,
        payload: snapshotToFlatArray(snapshot),
      });
    });
};

// action for creating note
const addNote = (dispatch) => async ({title, description}) => {
  dispatch({type: NOTE_REQUEST_IN_PROCESS});
  const data = {title, description};
  return database()
    .ref(NOTE)
    .push()
    .set(data)
    .then(() => {
      dispatch({type: NOTE_REQUEST_IS_COMPLETE});
      return Promise.resolve(data);
    });
};

// action for updating note
const updateNote = (dispatch) => ({key, title, description}) => {
  dispatch({type: NOTE_REQUEST_IN_PROCESS});
  const data = {title, description};
  return database()
    .ref(`${NOTE}/${key}`)
    .set(data)
    .then(() => {
      dispatch({type: NOTE_REQUEST_IS_COMPLETE});
      return Promise.resolve(data);
    });
};

// action for removing note
const removeNote = (dispatch) => (key) => {
  dispatch({type: NOTE_REQUEST_IN_PROCESS});
  return database()
    .ref(`${NOTE}/${key}`)
    .remove()
    .then(() => {
      dispatch({type: NOTE_REQUEST_IS_COMPLETE});
      return Promise.resolve();
    });
};

// Note name export for context and provider
export const {Provider: NoteProvider, Context: NoteContext} = createDataContext(
  NoteReducer,
  {
    addNote,
    removeNote,
    updateNote,
    loadNotes,
  },
  initState,
);
