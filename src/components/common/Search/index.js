import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import styles from './styles';
import leftArrow from '../../../../assets/images/leftArrow.png';
import search from '../../../../assets/images/search.png';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const {navigate, toggleDrawer, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => goBack()}>
        <Image source={leftArrow} style={{width: 20, height: 20}} />
      </Pressable>

      <View style={styles.search}>
        <Image source={search} style={{width: 20, height: 20}} />
        <TextInput
          placeholder="Chercher par rue ou ville"
          style={{paddingRight: '30%', fontFamily: 'OpenSans-Regular'}}
        />
      </View>
    </View>
  );
};

export default Search;
