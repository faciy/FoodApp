import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import leftArrow from '../../../assets/images/leftArrow.png';
import food from '../../../assets/images/food.jpg';
import coctail from '../../../assets/images/coctail.jpg';
import salade from '../../../assets/images/salade.jpg';
import ingredient from '../../../assets/images/ingredient.jpg';
import legumes from '../../../assets/images/legumes.jpg';
import gateau from '../../../assets/images/gateau.jpg';
import leg from '../../../assets/images/leg.jpg';
import Icon from '../common/Icon';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const datas = [
  {
    id: 1,
    img: food,
    nameRest: 'Restaurant Chez Samer',
    statut: 'Annulé',
    commande: 'Codys',
  },
  {
    id: 2,
    img: coctail,
    nameRest: 'Restaurant Chez Samer',
    statut: 'En cours',
    commande: 'Codys',
  },
  {
    id: 3,
    img: salade,
    nameRest: 'koffi prudence',
    statut: 'Annulé',
    commande: 'Codys',
  },
  {
    id: 4,
    img: ingredient,
    nameRest: 'Alice Rose',
    statut: 'Terminé',
    commande: 'Codys',
  },
  {
    id: 5,
    img: legumes,
    nameRest: 'Restaurant Chez Samer',
    statut: 'Annulé',
    commande: 'Codys',
  },
  {
    id: 6,
    img: leg,
    nameRest: 'Tante Ahou',
    statut: 'Annulé',
    commande: 'Codys',
  },
  {
    id: 7,
    img: gateau,
    nameRest: 'Gerold',
    statut: 'Terminé',
    commande: 'Codys',
  },
];

const MesCommandesComponent = () => {
  const {navigate, goBack, DrawerActions, toggleDrawer} = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('InfoCommande', {item: item})}
        style={styles.card}>
        <View style={styles.img}>
          <Image
            source={item.img}
            style={{width: 100, height: 100, borderRadius: 10}}
          />
        </View>
        <View style={styles.text}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 20,
              color: 'black',
              fontFamily: 'OpenSans-Bold',
            }}>
            {item.nameRest}
          </Text>
          <Text
            style={{
              fontFamily: 'OpenSans-Light',
              fontSize: 16,
              color: 'black',
            }}>
            {item.commande}
          </Text>
          <Text
            style={{
              fontSize: 16,
              top: 10,
              color: 'black',
              fontFamily: 'OpenSans-Bold',
            }}>
            {item.statut}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon onPress={() => toggleDrawer()} sizeIcon={15} icon={leftArrow} />
        <Text style={{fontSize: 20, fontFamily: 'OpenSans-Bold'}}>
          Mes Commandes
        </Text>
      </View>
      <View style={styles.body}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={datas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default MesCommandesComponent;
