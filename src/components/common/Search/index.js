import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import styles from './styles';
import user from '../../../../assets/images/user.png';

const Search = () => {
  return (
    <View style={styles.container}>
      <Image source={user} style={{width: 25, height: 25}} />

      <View style={styles.search}>
        <Image source={user} style={{width: 25, height: 25, left: 15}} />
        <TextInput
          placeholder="Chercher par rue ou ville"
          style={{paddingLeft: 30}}
        />
      </View>
    </View>
  );
};

export default Search;
