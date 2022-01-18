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
import rightArrow from '../../../assets/images/rightArrow.png';
import food from '../../../assets/images/food.jpg';
import Icon from '../common/Icon';
import {useNavigation} from '@react-navigation/native';

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
    img: food,
    nameRest: 'Restaurant Chez Samer',
    statut: 'Annulé',
    commande: 'Codys',
  },
  {
    id: 3,
    img: food,
    nameRest: 'Restaurant Chez Samer',
    statut: 'Annulé',
    commande: 'Codys',
  },
  {
    id: 4,
    img: food,
    nameRest: 'Restaurant Chez Samer',
    statut: 'Annulé',
    commande: 'Codys',
  },
  {
    id: 5,
    img: food,
    nameRest: 'Restaurant Chez Samer',
    statut: 'Annulé',
    commande: 'Codys',
  },
  {
    id: 6,
    img: food,
    nameRest: 'Restaurant Chez Samer',
    statut: 'Annulé',
    commande: 'Codys',
  },
  {
    id: 7,
    img: food,
    nameRest: 'Restaurant Chez Samer',
    statut: 'Annulé',
    commande: 'Codys',
  },
];

const MesCommandesComponent = () => {
  const {navigate, goBack} = useNavigation();

  const renderItem = () => {
    return (
      <TouchableOpacity
        onPress={() => navigate('InfoCommande')}
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
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon onPress={() => {}} sizeIcon={15} icon={rightArrow} />
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>Mes Commandes</Text>
      </View>
      <View style={styles.body}>
        {/* <TouchableOpacity
          // onPress={() => navigate('DetailsCommande')}
          onPress={() => navigate('InfoCommande')}
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
        </TouchableOpacity> */}
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
