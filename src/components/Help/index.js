import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import styles from './styles';
import rightArrow from '../../../assets/images/rightArrow.png';
import user from '../../../assets/images/user.png';
import foodDelivery from '../../../assets/images/foodDelivery.png';
import Icon from '../common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const HelpComponent = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon onPress={() => goBack()} sizeIcon={15} icon={rightArrow} />
        <Text numberOfLines={1} style={{fontSize: 20}}>
          Comment pouvons nous vous aiderrrrfff
        </Text>
      </View>
      <View style={styles.body}>
        {/* PREMIER CARD  */}
        <TouchableOpacity
          onPress={() => navigate('HelpCommandeOne')}
          style={styles.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={foodDelivery} style={{width: 100, height: 100}} />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Aide pour une commande
            </Text>
          </View>
        </TouchableOpacity>
        {/* DEUXIEME CARD  */}
        <View style={{marginTop: -120}} />
        <TouchableOpacity
          onPress={() => navigate('HelpCommandeTwo')}
          style={styles.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={foodDelivery} style={{width: 100, height: 100}} />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Non lié à une commande
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HelpComponent;
