import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
import food from '../../../assets/images/food.jpg';

const DetailsRestaurantComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={food} style={{flex: 1.5, width: '100%'}} />
        <View style={{}}></View>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

export default DetailsRestaurantComponent;
