/* eslint-disable react/jsx-props-no-spreading */
import React, {useContext, useRef} from 'react';
import {ThemeContext, Icon} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import {Controller} from 'react-hook-form';
import {ErrorText} from './ErrorText';

// custom input component to show errors and desired value

export const Input = ({
  placeholder,
  type,
  name,
  control,
  rules,
  errors,
  cutomErrorMessage,
  onChangeText,
  leftIconName,
  containerStyle,
  editable,
  autoFocus,
  onSubmitEditing,
  onEndEditing,
  defaultValue = '',
  numberOfLines,
  multiline,
}) => {
  const {theme} = useContext(ThemeContext);

  let extraProps = {};
  const inputRef = useRef(null);
  // logic for filling props based on input type
  (() => {
    switch (type) {
      case 'password':
        extraProps = {...extraProps, secureTextEntry: true};
        break;

      case 'email':
        extraProps = {
          ...extraProps,
          keyboardType: 'email-address',
          autoCompleteType: 'email',
        };
        break;

      case 'numeric':
        extraProps = {
          ...extraProps,
          keyboardType: 'numeric',
        };
        break;

      default:
        break;
    }
  })();

  useFocusEffect(
    React.useCallback(() => {
      if (autoFocus) {
        setTimeout(() => {
          inputRef?.current?.focus();
        }, 1000);
      }
    }, []),
  );

  // this funtions returs the exact error from client side error object
  const fetchClientSideError = () => {
    if (errors && Object.keys(errors).length && name in errors) {
      switch (errors[name].type) {
        case 'required':
          return 'This field is required';
        case 'minLength':
          return `Min length for this field is ${rules.minLength}`;
        case 'maxLength':
          return `Min length for this field is ${rules.maxLength}`;
        default:
          return cutomErrorMessage;
      }
    }
    return '';
  };

  return (
    <>
      <View
        style={[
          theme.Input.inputContainerStyle,
          styles.inputContainerStyle,
          leftIconName && {paddingLeft: 10},
          containerStyle,
        ]}>
        {leftIconName !== undefined && (
          <Icon
            color={theme.colors.primary}
            name={leftIconName}
            containerStyle={styles.leftIconStyle}
          />
        )}
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              ref={inputRef}
              onChangeText={(v) => {
                onChange(v);
                if (onChangeText) {
                  onChangeText(v);
                }
              }}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={theme.colors.lightGray}
              style={{
                flex: 1,
                minHeight:
                  Platform.OS === 'ios' && numberOfLines
                    ? 20 * numberOfLines
                    : null,
                fontFamily: 'Poppins-Regular',
              }}
              editable={editable}
              autoCapitalize="none"
              pointerEvents={editable ? 'none' : undefined}
              onSubmitEditing={onSubmitEditing}
              onEndEditing={onEndEditing}
              multiline={multiline || !!numberOfLines}
              numberOfLines={Platform.OS === 'ios' ? null : numberOfLines}
              textAlignVertical={numberOfLines && 'top'}
              {...extraProps}
            />
          )}
          name={name}
          rules={rules}
          defaultValue={defaultValue}
        />
      </View>
      <ErrorText text={fetchClientSideError()} />
    </>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
  },
  leftIconStyle: {},
});
