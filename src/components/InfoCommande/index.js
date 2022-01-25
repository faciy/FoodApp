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
import leftArrow from '../../../assets/images/leftArrow.png';
import pin from '../../../assets/images/pin.png';
import finish from '../../../assets/images/finish.png';
import telephone from '../../../assets/images/telephone.png';
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

const InfoCommandeComponent = ({image, statut, nameRest, commande}) => {
  const {navigate, toggleDrawer} = useNavigation();

  const scroolAnimated = useRef(new Animated.Value(0)).current;
  // const scroolAnimated = useRef(new Animated.Value(10)).current;

  // const Header_Max_Height = 0;
  // const Header_Mix_Height = 50;

  const animatedHeight = scroolAnimated.interpolate({
    inputRange: [0, 347],
    outputRange: ['30%', '10%'],
    extrapolate: 'clamp',
  });

  const animatedMargin = scroolAnimated.interpolate({
    inputRange: [0, 347],
    outputRange: [0, 20],
    extrapolate: 'clamp',
  });

  // const animatedBackground = scroolAnimated.interpolate({
  //   inputRange: [0, 1172],
  //   outputRange: ['transparent', 'red'],
  //   extrapolate: 'clamp',
  // });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, {height: animatedHeight}]}>
        <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
          <View style={[styles.helpView]}>
            <Icon sizeIcon={15} icon={leftArrow} bgIcon="white" />
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
                source={telephone}
                style={{width: 20, height: 20, tintColor: 'white'}}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'OpenSans-Bold',
                }}>
                Aide
              </Text>
            </TouchableOpacity>
          </View>
          {/* TEXTE RESTAURANT */}
          <View style={{alignSelf: 'center', marginTop: 10, width: '80%'}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                color: 'white',
                // fontWeight: 'bold',
                fontFamily: 'OpenSans-Bold',
              }}>
              {nameRest}
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
                  top: 20,
                  color: 'white',
                  // fontWeight: 'bold',
                  fontFamily: 'OpenSans-Bold',
                }}>
                Voir l'établissemnt
              </Text>
              <Image
                source={rightArrow}
                style={{
                  width: 15,
                  height: 15,
                  tintColor: 'white',
                  top: 20,
                  left: 10,
                }}
              />
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
          <Animated.View style={[styles.top, {marginTop: animatedMargin}]}>
            <Icon sizeIcon={40} icon={user} bgIcon="white" />
            <View>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'OpenSans-Bold',
                  color: 'black',
                }}>
                {statut}
              </Text>
              <Text style={{fontFamily: 'OpenSans-Bold', color: 'black'}}>
                Juillet.12, 2021 | 15:57
              </Text>
              <Text>NUMERO DE COMMANDE : YAP1BSU</Text>
            </View>
          </Animated.View>

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
            <Text style={{fontFamily: 'OpenSans-Bold', color: 'black'}}>
              Vous avez annulé cette commande
            </Text>
          </View>

          <View style={{padding: 20}}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
              }}>
              Votre commande
            </Text>
            <Text
              style={{
                fontSize: 15,
                top: 20,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
              }}>
              1 product de Restaurant Grâce Delice
            </Text>
            <Text style={{fontSize: 20, marginTop: 40}}>
              <Text style={{color: 'black', fontFamily: 'OpenSans-Bold'}}>
                1X
              </Text>{' '}
              {commande}
            </Text>
          </View>

          <View style={{padding: 20}}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
              }}>
              Informations de livraison
            </Text>
          </View>

          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              right: 10,
            }}>
            <Image
              source={pin}
              style={{width: 35, height: 35, tintColor: '#eccc68'}}
            />
            <Text
              numberOfLines={1}
              style={{
                fontSize: 18,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
              }}>
              225,Yamoussoukro, Côte d'ivoire
            </Text>
          </View>

          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={finish}
              style={{width: 20, height: 20, tintColor: '#23A082'}}
            />
            <Text
              numberOfLines={1}
              style={{
                fontSize: 18,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
                left: 10,
              }}>
              Unnamed Road, Yamoussoukro, {'\n'} Côte d'Ivoire
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#dfe6e9',
              height: 300,
              width: '100%',
            }}>
            <View style={{padding: 20}}>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: 'OpenSans-Bold',
                  color: 'black',
                }}>
                Récapitulatif
              </Text>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18, fontFamily: 'OpenSans-Bold'}}>
                  Livraison
                </Text>
                <Text style={{fontSize: 18, fontFamily: 'OpenSans-Bold'}}>
                  Sans frais
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18, fontFamily: 'OpenSans-Bold'}}>
                  Produits
                </Text>
                <Text style={{fontSize: 18, fontFamily: 'OpenSans-Bold'}}>
                  Sans frais
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 23,
                    fontFamily: 'OpenSans-Bold',
                    color: 'black',
                  }}>
                  Total
                </Text>
                <Text
                  style={{
                    fontSize: 23,
                    fontFamily: 'OpenSans-Bold',
                    color: 'black',
                  }}>
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
