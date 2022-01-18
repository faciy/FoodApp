import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
import rightArrow from '../../../assets/images/rightArrow.png';
import food from '../../../assets/images/food.jpg';
import Icon from '../common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const MesCommandesComponent = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon onPress={() => {}} sizeIcon={15} icon={rightArrow} />
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>Mes Commandes</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => navigate('DetailsCommande')}
          style={styles.card}>
          <View style={styles.img}>
            <Image
              source={food}
              style={{width: 100, height: 100, borderRadius: 10}}
            />
          </View>
          <View style={styles.text}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Restaurant Grace Delice
            </Text>
            <Text>Cody's</Text>
            <Text style={{fontSize: 16, top: 10}}>Annule</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MesCommandesComponent;
