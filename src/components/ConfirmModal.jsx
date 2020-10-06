import React, {useContext} from 'react';
import {View, Modal} from 'react-native';
import {Button, Icon, ThemeContext, Text} from 'react-native-elements';

export const ConfirmModal = ({
  onConfirmPress,
  onCancelPress,
  text,
  visible,
}) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {
    container,
    modalContainer,
    modalTextContainer,
    iconContainer,
    modalTextStyle,
    buttonList,
    buttonContainerStyle,
  } = styles;

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onCancelPress}>
      <View style={container}>
        <View style={modalContainer}>
          <Icon
            raised
            name="exclamation"
            type="material-community"
            color={colors.warning}
            reverse
            size={30}
            containerStyle={iconContainer}
          />
          <View style={modalTextContainer}>
            <Text style={{fontSize: 16, color: colors.lightBlack}}>
              Warning!
            </Text>
            <Text style={modalTextStyle}>{text}</Text>
            <View style={buttonList}>
              <Button
                onPress={onConfirmPress}
                containerStyle={buttonContainerStyle}
                buttonStyle={{backgroundColor: colors.warning}}
                title="Confirm"
                borderRadius={3}
                small
                raised
              />
              <Button
                onPress={onCancelPress}
                containerStyle={buttonContainerStyle}
                buttonStyle={{backgroundColor: colors.backgroundColor}}
                titleStyle={{color: colors.lightBlack}}
                title="Cancel"
                borderRadius={3}
                small
                raised
              />
            </View>
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
    backgroundColor: '#F1C050',
  },
  buttonList: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: -6,
  },
  buttonContainerStyle: {
    width: '40%',
    marginLeft: 0,
    marginRight: 0,
  },
};
