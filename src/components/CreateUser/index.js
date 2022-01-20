import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Image,
  Linking,
} from 'react-native';
import styles from './styles';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';

const createUserComponent = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => navigate('Register')}
          style={styles.registerBtn}>
          <Text style={styles.textRegister}>Inscription</Text>
        </TouchableOpacity>
        <View style={styles.connexion}>
          <Text style={styles.exist}>Vous avez déjà un compte ? </Text>
          <TouchableOpacity
            onPress={() => navigate('Login')}
            style={styles.connexionBtn}>
            <Text style={styles.textConnexion}>Connexion</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.conditions}>
          <Text style={{textAlign: 'center', fontFamily: 'OpenSans-Regular'}}>
            En continuant, Vous acceptez nos{' '}
            <Text
              style={{color: '#172774', textDecorationLine: 'underline'}}
              onPress={() => Linking.openURL('http://google.com')}>
              Conditions d'utilisation
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default createUserComponent;
