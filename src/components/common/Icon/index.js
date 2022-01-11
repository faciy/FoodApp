import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import user from '../../../../assets/images/user.png';

const Icon = ({bgIcon, sizeIcon, icon, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {backgroundColor: bgIcon}]}>
      <Image source={icon} style={{width: sizeIcon, height: sizeIcon}} />
    </Pressable>
  );
};

export default Icon;
