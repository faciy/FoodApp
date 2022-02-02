import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
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

const LoginComponent = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {navigate} = useNavigation();
  const animateValue = useRef(new Animated.Value(1)).current;

  const animatedStyle = {
    transform: [{scale: animateValue}],
  };

  const loginBtn = () => {
    Animated.timing(animateValue, {
      toValue: 0.3,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => {
      animateValue.setValue(1);
    });
    navigate('CodeVerification');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header show={true} title="CONNEXION" />
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={{flexDirection: 'row-reverse'}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'OpenSans-Bold',
                color: '#23A082',
                textDecorationLine: 'underline',
              }}>
              Inscription
            </Text>
          </TouchableOpacity>
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

          {/* BUTTON LIGHT  */}

          <TouchableOpacity
            onPress={() => navigate('ForgetPassword')}
            style={{alignItems: 'center', marginTop: 25}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'OpenSans-Bold',
                color: '#23A082',
              }}>
              Mot de passe oublié
            </Text>
          </TouchableOpacity>

          {/* BUTTON INSCRIPTION  */}
          <ButtonAuth
            txColor="white"
            bg="#23A082"
            animatedStyle={animatedStyle}
            onPress={() => loginBtn()}
            text={'Connexion'}
            hg={55}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginComponent;
