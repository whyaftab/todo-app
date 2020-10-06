import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ThemeContext} from 'react-native-elements';

// main design container to be used by each screens
export const Container = ({style, children, isScrollView, backgroundColor}) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return isScrollView ? (
    <ScrollView
      style={[
        {backgroundColor: colors.backgroundColor},
        style,
        backgroundColor && {backgroundColor},
      ]}
      contentContainerStyle={styles.scrollView}
      keyboardShouldPersistTaps="always">
      {children}
    </ScrollView>
  ) : (
    <View
      style={[
        styles.style,
        {backgroundColor: colors.backgroundColor},
        style,
        backgroundColor && {backgroundColor},
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  style: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});
