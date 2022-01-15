import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import styles from './styles';
import rightArrow from '../../../assets/images/rightArrow.png';
import user from '../../../assets/images/user.png';
import food from '../../../assets/images/food.jpg';
import Icon from '../common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const CodePromoComponent = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon onPress={() => goBack()} sizeIcon={15} icon={rightArrow} />
        <Text style={{fontSize: 20}}>Code promo</Text>
      </View>
      <View style={styles.body}>
        <View style={{flexDirection: 'row'}}>
          <Icon onPress={() => {}} sizeIcon={25} icon={user} />
          <TextInput placeholder="Entrer le code promo" style={styles.input} />
        </View>
        <View style={{marginTop: 20, padding: 20}}>
          <Text style={{fontSize: 16}}>VOS CODES PROMO</Text>
          <View
            style={{backgroundColor: 'grey', width: '100%', height: 1, top: 10}}
          />
        </View>
        <View style={{marginTop: 20, padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16}}>
              [Yamoussoukro] , votre {'\n'}solde dans Restaurants
            </Text>
            <Text style={{fontSize: 16}}>8000 Fcfa</Text>
          </View>
          <View
            style={{backgroundColor: 'grey', width: '100%', height: 1, top: 10}}
          />
        </View>
      </View>
    </View>
  );
};

export default CodePromoComponent;
