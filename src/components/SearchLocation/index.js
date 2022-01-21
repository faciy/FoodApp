import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import styles from './styles';
import user from '../../../assets/images/user.png';
import Search from '../common/Search';

const SearchLocationComponent = () => {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
};

export default SearchLocationComponent;
