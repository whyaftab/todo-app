/* eslint-disable react/jsx-filename-extension */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import App from './App';
import {name as appName} from './app.json';
import theme from './src/constant/theme.json';
import {NoteProvider} from './src/context/NoteContext';

const Root = () => (
  <ThemeProvider theme={theme}>
    <NoteProvider>
      <App />
    </NoteProvider>
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => Root);
