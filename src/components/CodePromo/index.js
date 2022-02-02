import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import styles from './styles';
import leftArrow from '../../../assets/images/leftArrow.png';
import user from '../../../assets/images/user.png';
import food from '../../../assets/images/food.jpg';
import Icon from '../common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const CodePromoComponent = () => {
  const {navigate, goBack, toggleDrawer} = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Icon onPress={() => toggleDrawer()} sizeIcon={15} icon={leftArrow} />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'OpenSans-Bold',
              color: 'black',
            }}>
            Code promo
          </Text>
        </View>
        <View style={styles.body}>
          <View style={{flexDirection: 'row'}}>
            <Icon onPress={() => {}} sizeIcon={25} icon={user} />
            <TextInput
              placeholder="Entrer le code promo"
              style={styles.input}
            />
          </View>
          <View style={{marginTop: 20, padding: 20}}>
            <Text style={{fontSize: 16, fontFamily: 'OpenSans-Bold'}}>
              VOS CODES PROMO
            </Text>
            <View
              style={{
                backgroundColor: 'grey',
                width: '100%',
                height: 1,
                top: 10,
              }}
            />
          </View>
          <View style={{marginTop: 20, padding: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'OpenSans-Light',
                  color: 'black',
                }}>
                [Yamoussoukro] , votre {'\n'}solde dans Restaurants
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'OpenSans-Light',
                  color: 'black',
                }}>
                8000 Fcfa
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'grey',
                width: '100%',
                height: 1,
                top: 10,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CodePromoComponent;
