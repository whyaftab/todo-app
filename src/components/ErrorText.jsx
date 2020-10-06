import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated} from 'react-native';

// error text component to be used by input elements
export const ErrorText = ({text, center, testID}) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    runAnimation();
  }, [text]);

  const runAnimation = () => {
    if (text) {
      slideIn();
    } else {
      slideOut();
    }
  };

  // slide in animation to show the error text when its not empty
  const slideIn = () => {
    Animated.spring(slideAnim, {
      toValue: 30,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();
  };

  // slide out animation to show the error text when its empty
  const slideOut = () => {
    Animated.spring(slideAnim, {
      toValue: 0,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      testID={testID}
      style={[
        styles.errorContainer,
        center && {padding: 0},
        {height: slideAnim},
      ]}>
      <Animated.Text
        style={[
          styles.errorTextStyle,
          center && {textAlign: 'center'},
          {height: slideAnim},
        ]}>
        {text}
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    paddingLeft: 10,
  },
  errorTextStyle: {
    color: 'red',
  },
});
