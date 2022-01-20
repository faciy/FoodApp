import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
import styles from './styles';
import Ellipse from '../../../../assets/images/Ellipse.png';
import facebook from '../../../../assets/images/facebook.png';

const Header = ({show, title}) => {
  return (
    <ImageBackground source={Ellipse} resizeMode="cover" style={styles.image}>
      <Text style={styles.food}>FOOD</Text>
      <Text style={styles.textContinued}>Continuer avec</Text>
      {show ? (
        <Text style={styles.textInscription}>{title}</Text>
      ) : (
        <Pressable style={styles.facebookBtn}>
          <Image source={facebook} style={styles.logoFb} />
          <Text style={styles.facebook}>Facebook</Text>
        </Pressable>
      )}
    </ImageBackground>
  );
};

export default Header;
