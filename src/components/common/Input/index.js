import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const Input = ({
  onChangeText,
  value,
  style,
  icon,
  iconPosition,
  iconLeft,
  keyboard,
  ...props
}) => {
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  return (
    <View style={styles.inputContainer}>
      {/* {label && <Text>{label}</Text>} */}

      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          {...props}
          keyboardType={keyboard}
        />
        <View>{iconLeft && iconLeft}</View>
      </View>
    </View>
  );
};

export default Input;
