import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  Image,
  Animated,
} from 'react-native';
import styles from './styles';
import Ellipse from '../../../../assets/images/Ellipse.png';
import facebook from '../../../../assets/images/facebook.png';
import * as Animatable from 'react-native-animatable';

const Header = ({show, title}) => {
  return (
    <ImageBackground source={Ellipse} resizeMode="cover" style={styles.image}>
      <Animatable.Text animation="slideInUp" style={styles.food}>
        FOOD
      </Animatable.Text>
      <Text style={styles.textContinued}>Continuer avec</Text>
      {show ? (
        <Animatable.Text animation="zoomInDown" style={styles.textInscription}>
          {title}
        </Animatable.Text>
      ) : (
        <Animatable.View style={styles.facebookBtn} animation="slideInUp">
          <Pressable
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image source={facebook} style={styles.logoFb} />
            <Text style={styles.facebook}>Facebook</Text>
          </Pressable>
        </Animatable.View>
      )}
    </ImageBackground>
  );
};

export default Header;
