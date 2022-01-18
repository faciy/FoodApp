import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  ScrollView,
} from 'react-native';
import styles from './styles';
import food from '../../../assets/images/food.jpg';
import rightArrow from '../../../assets/images/rightArrow.png';
import user from '../../../assets/images/user.png';
import facebook from '../../../assets/images/facebook.png';
import Icon from '../common/Icon';
import {useNavigation} from '@react-navigation/native';
import {State} from 'react-native-gesture-handler';

const datas = [
  {
    id: 1,
    statut: 'GRATUIT',
    pourcentage: 93,

    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 2,
    statut: 'GRATUIT',
    pourcentage: 93,

    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 3,
    statut: 'GRATUIT',
    pourcentage: 93,

    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 4,
    statut: 'GRATUIT',
    pourcentage: 93,

    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 5,
    statut: 'GRATUIT',
    pourcentage: 93,

    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 6,
    statut: 'GRATUIT',
    pourcentage: 93,

    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 7,
    statut: 'GRATUIT',
    pourcentage: 93,

    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 8,
    statut: 'GRATUIT',
    pourcentage: 93,

    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 9,
    statut: 'GRATUIT',
    pourcentage: 93,

    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
  {
    id: 10,
    statut: 'GRATUIT',
    pourcentage: 93,
    //
    restaurant: 'Chez Samer',
    aliment: 'Chawarma',
  },
];

const {add, set, block, cond, eq, multiply, max, concat} = Animated;

const InfoCommandeComponent = () => {
  const {navigate, toggleDrawer} = useNavigation();

  const scroolAnimated = useRef(new Animated.Value(0)).current;

  // const Header_Max_Height = 0;
  // const Header_Mix_Height = 50;

  const animatedHeight = scroolAnimated.interpolate({
    inputRange: [0, 1172],
    outputRange: [250, 60],
    extrapolate: 'clamp',
  });

  const animatedBackground = scroolAnimated.interpolate({
    inputRange: [0, 1172],
    outputRange: ['transparent', 'red'],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, {height: animatedHeight}]}>
        <ImageBackground source={food} style={{width: '100%', height: '100%'}}>
          <Animated.View
            style={[styles.helpView, {backgroundColor: animatedBackground}]}>
            <Icon sizeIcon={15} icon={rightArrow} bgIcon="white" />
            <TouchableOpacity
              onPress={() => navigate('Help')}
              style={{
                backgroundColor: '#23A082',
                width: 100,
                height: 40,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                borderRadius: 30,
              }}>
              <Image
                source={facebook}
                style={{width: 20, height: 20, tintColor: 'white'}}
              />
              <Text style={{color: 'white', fontSize: 18}}>Aide</Text>
            </TouchableOpacity>
          </Animated.View>
          {/* TEXTE RESTAURANT */}
          <View style={{alignSelf: 'center', marginTop: 10, width: '80%'}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              Restaurant Grâce Delice
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  // top: 20,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Voir l'établissemnt
              </Text>
              <Icon sizeIcon={15} icon={rightArrow} bgIcon="white" />
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
      <View style={styles.body}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {y: scroolAnimated}},
              },
            ],
            {useNativeDriver: false},
          )}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 40,
              justifyContent: 'space-around',
            }}>
            <Icon sizeIcon={40} icon={user} bgIcon="white" />
            <View>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>Annulé</Text>
              <Text>Juillet.12, 2021 | 15:57</Text>
              <Text>NUMERO DE COMMANDE : YAP1BSU</Text>
            </View>
          </View>

          <View
            style={{
              padding: 20,
              backgroundColor: 'pink',
              justifyContent: 'center',
              // alignItems: 'center',
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 15,
            }}>
            <Text style={{fontWeight: 'bold'}}>
              Vous avez annulé cette commande
            </Text>
          </View>

          <View style={{padding: 20}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              Votre commande
            </Text>
            <Text style={{fontSize: 18, top: 20}}>
              1 product de Restaurant Grâce Delice
            </Text>
            <Text style={{fontSize: 20, marginTop: 40}}>
              <Text style={{fontWeight: 'bold'}}>1X</Text> Codys
            </Text>
          </View>

          <View style={{padding: 20}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              Informations de livraison
            </Text>
          </View>

          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon sizeIcon={40} icon={user} />
            <Text numberOfLines={1} style={{fontSize: 18}}>
              225,Yamoussoukro, Côte d'ivoire
            </Text>
          </View>

          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon sizeIcon={40} icon={user} />
            <Text numberOfLines={1} style={{fontSize: 18}}>
              Unnamed Road, Yamoussoukro, Côte d'Ivoire
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#dfe6e9',
              height: 300,
              width: '100%',
            }}>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                Récapitulatif
              </Text>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18}}>Livraison</Text>
                <Text style={{fontSize: 18}}>Sans frais</Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18}}>Produits</Text>
                <Text style={{fontSize: 18}}>Sans frais</Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 23, fontWeight: 'bold'}}>Total</Text>
                <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                  Sans frais
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default InfoCommandeComponent;
