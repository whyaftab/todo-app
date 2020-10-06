// common file to generate context based on given arguments
import React, {useReducer} from 'react';

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  // creating provider with embeded state and actions
  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};

    Object.keys(actions).forEach((key) => {
      boundActions[key] = actions[key](dispatch);
    });

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
