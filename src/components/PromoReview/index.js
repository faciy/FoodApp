import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import foodDelivery from '../../../assets/images/foodDelivery.png';
import ButtonAuth from '../common/ButtonAuth';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const PromoReviewComponent = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            top: '20%',
          }}>
          Oups !
        </Text>
        <View style={{alignItems: 'center', marginTop: '30%'}}>
          <Image source={foodDelivery} style={{width: 200, height: 200}} />
          <Text style={{textAlign: 'center', fontSize: 18, top: 20}}>
            Erreur avec le code promo.{'\n'}Souhaitez-vous le saisir{'\n'}
            manuellement ?
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}} style={styles.btn}>
          <Text style={styles.text}>Fermer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Gift')}
          style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: '#23A082', fontWeight: 'bold'}}>
            Voir mes codes promos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PromoReviewComponent;
