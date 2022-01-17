import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
