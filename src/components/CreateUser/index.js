import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Animated,
  Linking,
} from 'react-native';
import styles from './styles';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const createUserComponent = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => navigate('Register')}
          style={styles.registerBtn}>
          <Animatable.Text animation="slideInLeft" style={styles.textRegister}>
            Inscription
          </Animatable.Text>
        </TouchableOpacity>
        <View style={styles.connexion}>
          <Text style={styles.exist}>Vous avez déjà un compte ? </Text>
          <TouchableOpacity
            onPress={() => navigate('Login')}
            style={styles.connexionBtn}>
            <Animatable.Text animation="zoomInUp" style={styles.textConnexion}>
              Connexion
            </Animatable.Text>
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
