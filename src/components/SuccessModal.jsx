import React, {useContext} from 'react';
import {View, Modal} from 'react-native';
import {Button, Icon, Text, ThemeContext} from 'react-native-elements';

export const SuccessModal = ({onPress, text, visible}) => {
  const {
    container,
    modalContainer,
    modalTextContainer,
    modalTextStyle,
    iconContainer,
  } = styles;

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onPress}>
      <View style={container}>
        <View style={modalContainer}>
          <Icon
            raised
            name="check"
            color={colors.success}
            size={30}
            reverse
            containerStyle={iconContainer}
          />
          <View style={modalTextContainer}>
            <Text style={{fontSize: 16, color: colors.lightBlack}}>Yipee!</Text>
            <Text style={modalTextStyle}>{text}</Text>
            <Button
              onPress={() => onPress()}
              containerViewStyle={{width: '90%'}}
              title="Okay"
              borderRadius={3}
              small
              raised
              buttonStyle={{backgroundColor: colors.success}}
              containerStyle={styles.buttonContainerStyle}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  modalContainer: {
    flexDirection: 'column',
    paddingTop: 30,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 4,
    width: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  modalTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 4,
    width: '100%',
  },
  modalTextStyle: {
    fontSize: 14,
    padding: 15,
    paddingBottom: 25,
    color: '#969696',
    textAlign: 'center',
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 2,
    borderRadius: 40,
    marginBottom: 30,
    marginTop: 10,
    top: 0,
    alignSelf: 'center',
  },
  buttonContainerStyle: {
    width: '80%',
    marginBottom: -6,
  },
};
