import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
import leftArrow from '../../../assets/images/leftArrow.png';
import user from '../../../assets/images/user.png';
import ArrowLeft from '../../../assets/images/ArrowLeft.png';
import Icon from '../common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const InformationProfilComponent = () => {
  const {navigate, goBack, toggleDrawer} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon onPress={() => toggleDrawer()} sizeIcon={15} icon={leftArrow} />
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
        <TouchableOpacity
          onPress={() => navigate('ChangePassword')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon onPress={() => {}} sizeIcon={25} icon={user} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Modifier mon mot de passe</Text>
            <View style={{left: 4}}>
              <Icon onPress={() => {}} sizeIcon={15} icon={ArrowLeft} />
            </View>
          </View>
        </TouchableOpacity>
        {/* NUMERO MODIFIER  */}
        <TouchableOpacity
          onPress={() => navigate('ChangeNumber')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
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
              <Icon onPress={() => {}} sizeIcon={15} icon={ArrowLeft} />
            </View>
          </View>
        </TouchableOpacity>
        {/* MODE DE PAIEMENT  */}
        <TouchableOpacity
          onPress={() => navigate('ModePayment')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon onPress={() => {}} sizeIcon={25} icon={user} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>Mode de paiement</Text>
            <View style={{left: 85}}>
              <Icon onPress={() => {}} sizeIcon={15} icon={ArrowLeft} />
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
              <Icon onPress={() => {}} sizeIcon={15} icon={ArrowLeft} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InformationProfilComponent;
