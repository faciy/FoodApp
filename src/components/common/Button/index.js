import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Utiliser la position actuelle</Text>
    </TouchableOpacity>
  );
};

export default Button;
