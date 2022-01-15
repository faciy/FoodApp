import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
import rightArrow from '../../../assets/images/rightArrow.png';
import user from '../../../assets/images/user.png';
import food from '../../../assets/images/food.jpg';
import Icon from '../common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const InformationProfilComponent = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon onPress={() => goBack()} sizeIcon={15} icon={rightArrow} />
        <Text style={{fontSize: 20}}>Mes Informations</Text>
      </View>
      <View style={styles.body}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon onPress={() => {}} sizeIcon={25} icon={user} />
          <Text style={{fontSize: 20}}>Charles Oth-Niel</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon onPress={() => {}} sizeIcon={25} icon={user} />
          <Text numberOfLines={1} style={{fontSize: 20}}>
            kouassicharlesothniel@gmail.com
          </Text>
        </View>
        {/* MOT DE PASSE MODIFIER  */}
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon onPress={() => {}} sizeIcon={25} icon={user} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Modifier mon mot de passe</Text>
            <View style={{left: 4}}>
              <Icon onPress={() => {}} sizeIcon={15} icon={rightArrow} />
            </View>
          </View>
        </TouchableOpacity>
        {/* NUMERO MODIFIER  */}
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon onPress={() => {}} sizeIcon={25} icon={user} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>
              Modifier mon numéro {'\n'}de téléphone
            </Text>
            <View style={{left: 45}}>
              <Icon onPress={() => {}} sizeIcon={15} icon={rightArrow} />
            </View>
          </View>
        </TouchableOpacity>
        {/* MODE DE PAIEMENT  */}
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon onPress={() => {}} sizeIcon={25} icon={user} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Mode de paiement</Text>
            <View style={{left: 85}}>
              <Icon onPress={() => {}} sizeIcon={15} icon={rightArrow} />
            </View>
          </View>
        </TouchableOpacity>
        {/* CONFIDENTIALITE  */}
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon onPress={() => {}} sizeIcon={25} icon={user} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Gérer la confidentialité</Text>
            <View style={{left: 50}}>
              <Icon onPress={() => {}} sizeIcon={15} icon={rightArrow} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InformationProfilComponent;
