import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {requestLocationPermission} from '../utils/Permissions';
import styles from './styles';

const HomeComponent = () => {
  useEffect(() => {
    requestLocationPermission()
      .then(res => console.log('res', res))
      .catch(err => console.log('err', err));
  });

  return (
    <View style={styles.container}>
      <Text>HomeComponent</Text>
    </View>
  );
};

export default HomeComponent;
