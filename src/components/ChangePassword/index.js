import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from '../common/Icon';
import leftArrow from '../../../assets/images/leftArrow.png';
import {useNavigation} from '@react-navigation/native';

const ChangePasswordComponent = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Icon onPress={() => goBack()} sizeIcon={15} icon={leftArrow} />
          <Text
            style={{fontSize: 20, fontFamily: 'OpenSans-Bold', color: 'black'}}>
            Changer mon mot de passe
          </Text>
        </View>

        {/* INPUT  */}
        <View style={{padding: 20}}>
          <Text
            style={{fontSize: 18, fontFamily: 'OpenSans-Bold', color: 'black'}}>
            MOT DE PASSE ACTUEL
          </Text>
          <TextInput placeholder="Mot de passe actuel" />
          <View style={{backgroundColor: 'grey', width: '100%', height: 1.5}} />
        </View>

        <View style={{padding: 20}}>
          <Text
            style={{fontSize: 18, fontFamily: 'OpenSans-Bold', color: 'black'}}>
            NOUVEAU MOT DE PASSE
          </Text>
          <TextInput placeholder="Nouveau mot de passe" />
          <View style={{backgroundColor: 'grey', width: '100%', height: 1.5}} />
        </View>
      </View>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          height: 60,
          justifyContent: 'center',
          borderTopColor: 'grey',
          borderTopWidth: 0.5,
        }}>
        <Text
          style={{color: 'green', fontSize: 20, fontFamily: 'OpenSans-Bold'}}>
          Terminé
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordComponent;
