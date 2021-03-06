import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import Container from '../common/Container';
import Icon from '../common/Icon';
import styles from './styles';
import upArrow from '../../../assets/images/upArrow.png';
import downArrow from '../../../assets/images/downArrow.png';
import user from '../../../assets/images/user.png';
import foodDelivery from '../../../assets/images/foodDelivery.png';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';

const CurrentPositionComponent = () => {
  const {navigate, toggleDrawer} = useNavigation();

  const handleShowProfil = () => {
    toggleDrawer();
  };

  const handleAdresse = () => {
    navigate('AdresseMap');
  };

  const handleActiveLocation = () => {
    console.log('Buton');
  };

  return (
    <Container bg="#FCC332">
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon
          onPress={() => handleShowProfil()}
          bgIcon="#dfe6e9"
          sizeIcon={25}
          icon={user}
        />
        <Pressable
          onPress={() => handleAdresse()}
          style={{flexDirection: 'row'}}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            Veuillez saisir une adresse {'\n'} de livraison.
          </Text>
          <View style={{position: 'absolute', right: '-3%', top: '50%'}}>
            <Image source={downArrow} style={{width: 15, height: 15}} />
          </View>
        </Pressable>
        <Icon bgIcon="#dfe6e9" sizeIcon={25} icon={user} />
      </View>
      {/* BODY ICON  */}
      <View
        style={{
          alignItems: 'center',
          marginTop: '50%',
        }}>
        <Image source={foodDelivery} style={{width: 300, height: 300}} />
      </View>
      {/* BUTTON POSITION  */}
      <Button onPress={() => handleActiveLocation()} />
    </Container>
  );
};

export default CurrentPositionComponent;
