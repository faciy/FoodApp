import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  Easing,
} from 'react-native';
import Container from '../common/Container';
import Header from '../common/Header';
import styles from './styles';
import user from '../../../assets/images/user.png';
import eye from '../../../assets/images/eye.png';
import eyeHide from '../../../assets/images/eyeHide.png';
import email from '../../../assets/images/email.png';
import unlock from '../../../assets/images/unlock.png';
import Input from '../common/Input';
import ButtonAuth from '../common/ButtonAuth';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const RegisterComponent = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {navigate} = useNavigation();

  const animateValue = useRef(new Animated.Value(1)).current;

  const animatedStyle = {
    transform: [{scale: animateValue}],
  };

  const registerBtn = () => {
    Animated.timing(animateValue, {
      toValue: 0.3,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => {
      animateValue.setValue(1);
    });
    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header show={true} title="INSCRIPTION" />
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => navigate('Login')}
            style={{flexDirection: 'row-reverse'}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'OpenSans-Bold',
                color: '#23A082',
                textDecorationLine: 'underline',
              }}>
              Connexion
            </Text>
          </TouchableOpacity>
          <Input
            label="Password"
            icon={
              <Image
                source={user}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            }
            iconPosition="left"
            placeholder="Nom"
          />
          <View
            style={{width: '100%', height: 2, backgroundColor: '#b2bec3'}}
          />
          {/* DEUXIEME INPUT  */}
          <Input
            label="Password"
            icon={
              <Image
                source={email}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            }
            iconPosition="left"
            placeholder="Email"
          />
          <View
            style={{width: '100%', height: 2, backgroundColor: '#b2bec3'}}
          />

          {/* TROISIEME INPUT  */}
          <Input
            label="Password"
            icon={
              <Image
                source={email}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            }
            iconPosition="left"
            placeholder="Numéro de téléphone"
            keyboard="phone-pad"
          />
          <View
            style={{width: '100%', height: 2, backgroundColor: '#b2bec3'}}
          />

          {/* QUATRIEME INPUT  */}

          <Input
            label="Password"
            icon={
              <TouchableOpacity
                onPress={() => {
                  setSecureTextEntry(prev => !prev);
                }}>
                {secureTextEntry ? (
                  <Image source={eyeHide} style={{width: 30, height: 30}} />
                ) : (
                  <Image source={eye} style={{width: 30, height: 30}} />
                )}
              </TouchableOpacity>
            }
            iconLeft={
              <Image
                source={unlock}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            }
            iconPosition="right"
            placeholder="Mot de passe"
            secureTextEntry={secureTextEntry}
          />
          <View
            style={{width: '100%', height: 2, backgroundColor: '#b2bec3'}}
          />

          {/* BUTTON INSCRIPTION  */}

          <ButtonAuth
            txColor="white"
            bg="#23A082"
            animatedStyle={animatedStyle}
            onPress={() => registerBtn()}
            text={'Inscription'}
            hg={55}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterComponent;
