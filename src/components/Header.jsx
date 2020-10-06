/* eslint-disable no-unneeded-ternary */
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon, ThemeContext} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TouchableView} from './TouchableView';

// common header component for screens
export const Header = ({
  black,
  rightComponent,
  style,
  leftComponent,
  title,
  noBack,
}) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        black && {backgroundColor: colors.lightBlack},
        style,
      ]}>
      {leftComponent ||
        (!noBack && (
          <TouchableView
            style={styles.leftContainer}
            onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-back"
              type="ionicon"
              color={black ? colors.white : colors.secondary}
            />
          </TouchableView>
        )) || <View style={styles.dummyViewStyle} />}
      <Text style={styles.titleStyle}>{title}</Text>
      {rightComponent ? rightComponent : <View style={styles.dummyViewStyle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    marginLeft: -6,
    borderRadius: 10,
  },
  titleStyle: {
    color: '#000',
    marginBottom: -4,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
  },
  dummyViewStyle: {
    width: 30,
  },
});
