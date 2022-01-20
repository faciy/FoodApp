import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Pressable,
  Image,
} from 'react-native';
import styles from './styles';

const Button = ({text, onPress, animatedStyle, bg, txColor, icon, hg}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[
          styles.button,
          animatedStyle,
          {
            backgroundColor: bg,
            flexDirection: icon ? 'row' : null,
            justifyContent: icon ? 'space-evenly' : 'center',
            height: hg,
          },
        ]}>
        {icon && (
          <Image source={icon && icon} style={{width: 25, height: 25}} />
        )}
        <Text style={[styles.text, {color: txColor}]}>{text}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Button;
