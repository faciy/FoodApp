import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import styles from './styles';
import leftArrow from '../../../assets/images/leftArrow.png';
import shoppingBag from '../../../assets/images/shoppingBag.png';
import repairing from '../../../assets/images/repairing.png';
import Icon from '../common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const HelpComponent = () => {
  const {navigate, goBack, toggleDrawer} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Icon onPress={() => toggleDrawer()} sizeIcon={15} icon={leftArrow} />
          <Text
            numberOfLines={1}
            style={{fontSize: 20, fontFamily: 'OpenSans-Bold'}}>
            Comment pouvons-nous vous aider
          </Text>
        </View>
      </View>
      <Animatable.View animation="zoomInUp" style={styles.body}>
        {/* PREMIER CARD  */}
        <TouchableOpacity
          onPress={() => navigate('HelpCommandeOne')}
          style={styles.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={shoppingBag} style={{width: 100, height: 100}} />
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontFamily: 'OpenSans-Bold',
              }}>
              Aide pour une commandeff
            </Text>
          </View>
        </TouchableOpacity>
        {/* DEUXIEME CARD  */}
        <View style={{marginTop: -120}} />
        <TouchableOpacity
          onPress={() => navigate('HelpCommandeTwo')}
          style={styles.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={repairing} style={{width: 100, height: 100}} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
              }}>
              Non lié à une commande
            </Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default HelpComponent;
