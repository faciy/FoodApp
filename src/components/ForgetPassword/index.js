import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Pressable,
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

const ForgetPasswordComponent = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header show={true} title="MOT DE PASSE OUBLIE" />
        <View style={styles.body}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                fontFamily: 'OpenSans-Regular',
              }}>
              Saisissez votre adresse email et nous vous aiderons à
              réinitialiser votre mot de passe
            </Text>
          </View>
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
          {/* BUTTON INSCRIPTION  */}
          <ButtonAuth
            txColor="white"
            bg="#23A082"
            text={'Envoyer le lien'}
            hg={55}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgetPasswordComponent;
