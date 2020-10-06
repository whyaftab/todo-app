/* eslint-disable react/jsx-one-expression-per-line */
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Text, ThemeContext, ListItem} from 'react-native-elements';

export const Item = ({number, onRemove, title, onPress}) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <ListItem
      leftAvatar={() => <Text>{number < 10 ? `0${number}` : number}.</Text>}
      title={title}
      rightIcon={{
        name: 'trash-can-outline',
        type: 'material-community',
        color: colors.secondary,
        onPress: onRemove,
      }}
      bottomDivider
      titleStyle={styles.titleStyle}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'Poppins-Regular',
  },
});
