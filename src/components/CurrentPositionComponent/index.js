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
import gift from '../../../assets/images/gift.png';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const CurrentPositionComponent = () => {
  const {navigate, toggleDrawer} = useNavigation();

  const handleShowProfil = () => {
    toggleDrawer();
  };

  const handleAdresse = () => {
    navigate('AdresseMap');
  };

  const handleActiveLocation = async () => {
    // try {
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //   );
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     console.log('You can use the location');
    //   } else {
    //     console.log('You cannot use the location');
    //   }
    // } catch (err) {}
    navigate('Home');
  };

  const handleGift = () => {
    navigate('PromoReview');
  };

  return (
    <Container bg="#FCC332">
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon
          onPress={() => handleShowProfil()}
          bgIcon="#ffeaa7"
          sizeIcon={20}
          icon={user}
        />
        <Pressable
          onPress={() => handleAdresse()}
          style={{flexDirection: 'row'}}>
          <Animatable.Text
            animation="bounce"
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontFamily: 'OpenSans-Bold',
            }}>
            Veuillez saisir une adresse {'\n'} de livraison.
          </Animatable.Text>
          <View style={{position: 'absolute', right: '-3%', top: '50%'}}>
            <Image source={downArrow} style={{width: 15, height: 15}} />
          </View>
        </Pressable>
        <Icon
          bgIcon="#ffeaa7"
          sizeIcon={20}
          icon={gift}
          onPress={() => handleGift()}
        />
      </View>
      {/* BODY ICON  */}
      <Animatable.View
        // animation="zoomOut"
        style={{
          alignItems: 'center',
          marginTop: '50%',
        }}>
        <Image source={foodDelivery} style={{width: 300, height: 300}} />
      </Animatable.View>
      {/* BUTTON POSITION  */}
      <Button
        title="Utiliser la position actuelle"
        onPress={() => handleActiveLocation()}
      />
    </Container>
  );
};

export default CurrentPositionComponent;
