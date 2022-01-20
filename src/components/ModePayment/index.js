import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Icon from '../common/Icon';
import rightArrow from '../../../assets/images/rightArrow.png';
import user from '../../../assets/images/user.png';
import {useNavigation} from '@react-navigation/native';

const ModePaymentComponent = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Icon onPress={() => goBack()} sizeIcon={15} icon={rightArrow} />
          <Text style={{fontSize: 20}}>Gérer les moyens de paiement</Text>
        </View>

        <View style={{padding: 20}}>
          <Text>AJOUTER UNE NOUVELLE CARTE</Text>
          <View
            style={{backgroundColor: 'grey', width: '100%', height: 1, top: 5}}
          />
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-around',
          }}>
          <Image source={user} style={{width: 25, height: 25}} />
          <Text style={{fontSize: 20}}>Ajouter une nouvelle carte</Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'grey',
            width: '100%',
            height: 1,
            marginHorizontal: 20,
          }}
        />
      </View>
    </View>
  );
};

export default ModePaymentComponent;
