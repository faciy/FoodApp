import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
import rightArrow from '../../../assets/images/rightArrow.png';
import foodDelivery from '../../../assets/images/foodDelivery.png';
import user from '../../../assets/images/user.png';

const GiftComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={rightArrow} style={{width: 20, height: 20}} />
      <View style={{alignSelf: 'center', marginTop: 50, alignItems: 'center'}}>
        <Image source={foodDelivery} style={{width: 150, height: 150}} />
        <Text style={{fontSize: 25, textAlign: 'center'}}>
          Gagnez<Text style={{fontWeight: 'bold'}}> 3000 XOF </Text>pour chaque
          ami parrainé
        </Text>
        <Text style={{top: 20}}>Partager votre code d'invitation</Text>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',

            alignItems: 'center',
            borderRadius: 50,
            borderColor: 'grey',
            borderWidth: 1,
          }}>
          <View
            style={{
              width: '100%',
              height: 80,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>X1AUJYA</Text>
            <Text style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}>
              Patarger
            </Text>
          </View>
        </View>

        {/* Texte  */}
        <View style={{marginTop: 40}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              lineHeight: 25,
            }}>
            Partagez votre code avec vos amis pour leur offrir 4000 XOF de
            réduction(limité à 1000 XOF par commande),valide 30 jours sur les
            commandes de plus de 3000 XOF. Vous recevez 3000 XOF de réduction
            lorsqu'ils passent leur première commande, valide pour 7 jours sur
            les commandes de plus de 4500 XOF.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GiftComponent;
