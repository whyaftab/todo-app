/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, {useContext} from 'react';
import {TouchableHighlight} from 'react-native';
import {ThemeContext} from 'react-native-elements';

// customizable touchable component
export const TouchableView = (props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableHighlight
      {...props}
      underlayColor={props.underlayColor || colors.underlayColor}>
      <>{props.children}</>
    </TouchableHighlight>
  );
};
