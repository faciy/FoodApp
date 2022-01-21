import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
import Container from '../common/Container';
import Header from '../common/Header';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import ButtonAuth from '../common/ButtonAuth';
import {UserContext} from '../../utils/context/AuthContext';
import {ScrollView} from 'react-native-gesture-handler';

const CodeVerificationComponent = () => {
  const [recupCode, setRecupCode] = useState('');
  const {navigate} = useNavigation();
  const [userInfo, setUserInfo] = useContext(UserContext);

  console.log('userInfo', userInfo);

  const handleHome = () => {
    console.log('Home');
    setUserInfo(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header show={true} title="VERIFICATION CODE" />
        <View style={styles.body}>
          <Text style={styles.text}>
            Nous avons envoyé la vérification du code à votre numéro de mobile
            +225 68060990
          </Text>
          <OTPInputView
            style={styles.OTPInputView}
            pinCount={4}
            codeInputFieldStyle={styles.inputFieldOff}
            codeInputHighlightStyle={styles.inputFieldOn}
            onCodeFilled={val => setRecupCode(val)}
          />
          <ButtonAuth
            txColor="white"
            bg="#23A082"
            onPress={() => handleHome()}
            text={'Envoyer'}
            hg={55}
          />
          <View style={styles.btnSend}>
            <Text>Vous n'avez pas recu ?</Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.textSend}> Réenvoyer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CodeVerificationComponent;
