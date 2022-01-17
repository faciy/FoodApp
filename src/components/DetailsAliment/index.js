import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import styles from './styles';
import food from '../../../assets/images/food.jpg';
import rightArrow from '../../../assets/images/rightArrow.png';
import user from '../../../assets/images/user.png';
import Icon from '../common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const datas = [
  {
    id: 1,
    statut: 'GRATUIT',
    pourcentage: 93,
    icon: user,
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 2,
    statut: 'GRATUIT',
    pourcentage: 93,
    icon: user,
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 3,
    statut: 'GRATUIT',
    pourcentage: 93,
    icon: user,
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 4,
    statut: 'GRATUIT',
    pourcentage: 93,
    icon: user,
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 5,
    statut: 'GRATUIT',
    pourcentage: 93,
    icon: user,
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 6,
    statut: 'GRATUIT',
    pourcentage: 93,
    icon: user,
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 7,
    statut: 'GRATUIT',
    pourcentage: 93,
    icon: user,
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 8,
    statut: 'GRATUIT',
    pourcentage: 93,
    icon: user,
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 9,
    statut: 'GRATUIT',
    pourcentage: 93,
    icon: user,
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 10,
    statut: 'GRATUIT',
    pourcentage: 93,
    icon: user,
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
];

const DetailsAlimentComponent = () => {
  const [isButonActive, setIsButonActive] = useState(false);
  const {navigate, toggleDrawer} = useNavigation();

  const renderItem = () => {
    return (
      <View style={{top: '130%', padding: 20}}>
        <TouchableOpacity
          onPress={() => navigate('AddCart')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={food}
            style={{width: 80, height: 80, borderRadius: 80}}
          />
          <View>
            <Text>Crêpe Au Sucre</Text>
            <Text>
              Couche fine de pâte,faite {'\n'} à base de farine chocolat {'\n'}{' '}
              nutella et d'oeufs
            </Text>
          </View>
          <View>
            <Text>2000 XOF</Text>
            <Text style={{textAlign: 'center', top: 20, fontSize: 20}}>+</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'grey',
            width: '100%',
            height: 0.5,
            top: 15,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={datas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View style={styles.header}>
              <ImageBackground
                source={food}
                style={{width: '100%', height: 200}}>
                <View
                  style={{
                    padding: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={rightArrow}
                    style={{width: 20, height: 20, tintColor: 'white'}}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      width: '90%',
                      height: 40,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      borderRadius: 50,
                    }}>
                    <Icon sizeIcon={15} icon={user} />
                    <TextInput placeholder="Recherche chez Samer" />
                  </View>
                </View>
              </ImageBackground>
              <View
                style={{
                  width: '90%',
                  height: 250,
                  marginLeft: 20,
                  marginTop: 100,
                  backgroundColor: 'white',
                  position: 'absolute',
                  borderRadius: 10,
                  padding: 20,
                  // alignItems: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>Chez Samer</Text>
                <View
                  style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: 'grey',
                    marginTop: 10,
                    borderRadius: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => setIsButonActive(!isButonActive)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor:
                        isButonActive === false ? 'orange' : 'grey',
                      width: '120%',
                      height: 40,
                      borderRadius: 20,
                    }}>
                    <Icon sizeIcon={15} icon={user} />
                    <Text>Livraison</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setIsButonActive(!isButonActive)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor:
                        isButonActive === false ? 'grey' : 'orange',
                      width: '100%',
                      height: 40,
                      borderRadius: 20,
                    }}>
                    <Icon sizeIcon={15} icon={user} />
                    <Text>A emporter</Text>
                  </TouchableOpacity>
                </View>
                <Text style={{top: 20, textAlign: 'center'}}>
                  Lavage et Maroc
                </Text>
                {/* LIGNE  */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 25,
                  }}>
                  <View>
                    <Icon sizeIcon={15} icon={user} />
                    <Text>25-35'</Text>
                  </View>
                  {/* LIGNE TWO  */}
                  <View style={{alignItems: 'center'}}>
                    <Icon sizeIcon={15} icon={user} />
                    <Text>93%</Text>
                    {/* <View>
                      <Text>Très bien</Text>
                    </View> */}
                  </View>
                  {/* LIGNE THREE  */}
                  <View>
                    <Icon sizeIcon={15} icon={user} />
                    <Text>500 XOF</Text>
                  </View>
                  {/* LIGNE FOUR */}
                  <View>
                    <Icon sizeIcon={15} icon={user} />
                    <Text>Prime</Text>
                  </View>
                </View>
              </View>
              <View style={{top: '70%'}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  CREPES
                </Text>
              </View>
            </View>
          }
          ListFooterComponent={<View style={{height: 200}} />}
        />
      </View>
    </View>
  );
};

export default DetailsAlimentComponent;
