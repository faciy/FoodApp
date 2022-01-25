import React, {useRef, useContext} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '../../../assets/images/ArrowLeft.png';
import leftArrow from '../../../assets/images/leftArrow.png';
import foodDelivery from '../../../assets/images/foodDelivery.png';
import facebook from '../../../assets/images/facebook.png';
import user from '../../../assets/images/user.png';
import telephone from '../../../assets/images/telephone.png';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import {DrawerItem} from '@react-navigation/drawer';
import {CollapsibleHeaderScrollView} from 'react-native-collapsible-header-views';
import {UserContext} from '../../utils/context/AuthContext';
import * as Animatable from 'react-native-animatable';

const DrawerContent = props => {
  const {goBack, navigate} = useNavigation();
  const [userInfo, setUserInfo] = useContext(UserContext);

  const sheetRef = React.useRef('BottomSheet');

  const handleLogout = () => {
    Alert.alert('Oups !', 'Voulez vous vraiment vous déconnecter ?', [
      {
        text: 'Annuler',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Deconnexion', onPress: () => setUserInfo(false)},
    ]);
  };

  const RotateIn = {
    from: {
      transform: [{rotate: '0deg'}],
    },
    to: {
      transform: [{rotate: '360deg'}],
    },
  };

  return (
    <View style={{backgroundColor: '#FCC332', flex: 1}}>
      {/* Header  */}
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={leftArrow} style={{width: 20, height: 20}} />
        </TouchableOpacity>
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
      <Text
        style={{
          padding: 20,
          fontSize: 30,
          // fontWeight: 'bold',
          color: 'black',
          fontFamily: 'OpenSans-Bold',
        }}>
        Bonjour, Charles !
      </Text>
      <Animatable.View
        animation={RotateIn}
        iterationCount={'infinite'}
        style={{alignItems: 'center', marginTop: 50}}>
        <Image source={foodDelivery} style={{width: 100, height: 100}} />
      </Animatable.View>

      {/* BOTOM SHEET  */}
      <View style={styles.container}>
        <BottomSheet
          bottomSheerColor="#FFFFFF"
          ref={sheetRef}
          initialPosition={'115%'} //200, 300
          snapPoints={['115%']}
          isBackDrop={true}
          isBackDropDismisByPress={true}
          isRoundBorderWithTipHeader={true}
          tipStyle={{backgroundColor: 'none'}}
          header={
            <View>
              <Text style={{fontSize: 25}}>Compte</Text>
            </View>
          }
          body={
            <View>
              <DrawerItem
                icon={() => (
                  <Image
                    source={user}
                    style={{
                      width: 20,
                      height: 20,
                      left: 20,
                      tintColor: 'black',
                    }}
                  />
                )}
                label={() => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontFamily: 'OpenSans-Light',
                      }}>
                      Mes commandes
                    </Text>
                    <Image
                      source={ArrowLeft}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: '#bdc3c7',
                        left: 30,
                      }}
                    />
                  </View>
                )}
                onPress={() => navigate('MesCommandes')}
              />
              {/* INFORMATION  */}
              <DrawerItem
                icon={() => (
                  <Image
                    source={user}
                    style={{
                      width: 20,
                      height: 20,
                      left: 20,
                      tintColor: 'black',
                    }}
                  />
                )}
                label={() => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontFamily: 'OpenSans-Light',
                      }}>
                      Mes informations
                    </Text>
                    <Image
                      source={ArrowLeft}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: '#bdc3c7',
                        left: 30,
                      }}
                    />
                  </View>
                )}
                onPress={() => navigate('InformationProfil')}
              />
              {/* BAR  */}
              <View
                style={{
                  backgroundColor: 'grey',
                  height: 1,
                  marginLeft: '5%',
                  marginRight: '5%',
                }}
              />

              {/* CODE PROMO  */}
              <DrawerItem
                icon={() => (
                  <Image
                    source={user}
                    style={{
                      width: 20,
                      height: 20,
                      left: 20,
                      tintColor: 'black',
                    }}
                  />
                )}
                label={() => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontFamily: 'OpenSans-Light',
                      }}>
                      Code promo
                    </Text>
                    <Image
                      source={ArrowLeft}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: '#bdc3c7',
                        left: 30,
                      }}
                    />
                  </View>
                )}
                onPress={() => navigate('CodePromo')}
              />
              {/* FAQ  */}
              <DrawerItem
                icon={() => (
                  <Image
                    source={user}
                    style={{
                      width: 20,
                      height: 20,
                      left: 20,
                      tintColor: 'black',
                    }}
                  />
                )}
                label={() => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontFamily: 'OpenSans-Light',
                      }}>
                      FAQ
                    </Text>
                    <Image
                      source={ArrowLeft}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: '#bdc3c7',
                        left: 30,
                      }}
                    />
                  </View>
                )}
                onPress={() => {}}
              />
              {/* NOTIFICATION  */}
              <DrawerItem
                icon={() => (
                  <Image
                    source={user}
                    style={{
                      width: 20,
                      height: 20,
                      left: 20,
                      tintColor: 'black',
                    }}
                  />
                )}
                label={() => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 18,
                        fontFamily: 'OpenSans-Light',
                      }}>
                      Notification
                    </Text>
                    <Image
                      source={ArrowLeft}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: '#bdc3c7',
                        left: 30,
                      }}
                    />
                  </View>
                )}
                onPress={() => {}}
              />
              {/* DECONNEXION  */}
              <DrawerItem
                icon={() => (
                  <Image
                    source={user}
                    style={{
                      width: 20,
                      height: 20,
                      left: 20,
                      tintColor: 'black',
                    }}
                  />
                )}
                label={() => (
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 18,
                      fontFamily: 'OpenSans-Light',
                    }}>
                    Deconnexion
                  </Text>
                )}
                onPress={() => handleLogout()}
              />
            </View>
          }
        />
      </View>
      {/* FIN BOTOM  */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default DrawerContent;
