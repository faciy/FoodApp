import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
// import styles from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import unlock from '../../../assets/images/unlock.png';
import closeButton from '../../../assets/images/closeButton.png';
import flag from '../../../assets/images/flag.png';
import location from '../../../assets/images/location.png';
import search from '../../../assets/images/search.png';
import navigation from '../../../assets/images/navigation.png';
import ArrowLeft from '../../../assets/images/ArrowLeft.png';
import Icon from '../common/Icon';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import * as Animatable from 'react-native-animatable';

const windowHeight = Dimensions.get('window').height;

const datas = [{id: 1, name: 'charles'}];

const AdresseMapComponent = () => {
  const {navigate, toggleDrawer, goBack} = useNavigation();
  const [indexHeight, setIndexHeight] = useState(null);

  const sheetRef = useRef('BottomSheet');

  const fadeIn = {
    0: {
      opacity: 0,
    },
    0.5: {
      opacity: 0,
    },
    1: {
      opacity: 1,
    },
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
      <View style={{padding: 20, position: 'absolute'}}>
        <Icon
          onPress={() => goBack()}
          bgIcon="white"
          sizeIcon={15}
          icon={closeButton}
        />
      </View>
      <View style={styles.containerBottomSheet}>
        <BottomSheet
          // keyboardAware
          bottomSheerColor="#FFFFFF"
          ref={sheetRef}
          initialPosition={'50%'} //200, 300
          snapPoints={['30%', '50%']}
          overDrag={false}
          // isBackDrop={true}
          // isBackDropDismissByPress={true}
          // isRoundBorderWithTipHeader={true}
          onChangeSnap={e => setIndexHeight(e.index)}
          // backDropColor="red"
          // isModal={false}
          // containerStyle={{position: 'absolute', zIndex: 1}}
          // tipStyle={{backgroundColor: 'red'}}
          // headerStyle={{backgroundColor: 'red'}}
          // bodyStyle={{backgroundColor: 'red'}}
          header={
            <View style={styles.header}>
              <View style={styles.panelHandle} />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 70,
                  paddingHorizontal: 20,
                  backgroundColor: '#FCC332',
                  width: '90%',
                  height: 60,
                  borderRadius: 5,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'space-around',
                  }}>
                  <Icon bgIcon="white" sizeIcon={25} icon={location} />
                  <Text
                    style={{
                      left: 5,
                      fontFamily: 'OpenSans-Bold',
                      color: 'black',
                    }}>
                    Toucher ici pour afficher votre {'\n'} position actuelle{' '}
                  </Text>
                </View>
                <View>
                  <Icon sizeIcon={20} icon={ArrowLeft} />
                </View>
              </TouchableOpacity>
            </View>
          }
          body={
            <View style={{padding: 20}}>
              {indexHeight === 0 ? (
                <Animatable.Text
                  animation={fadeIn}
                  style={{
                    fontSize: 20,
                    fontFamily: 'OpenSans-Bold',
                    color: 'black',
                  }}>
                  Marquer le point de livraison
                </Animatable.Text>
              ) : (
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'OpenSans-Bold',
                    color: 'black',
                  }}>
                  Ajouter une adresse de livraison
                </Text>
              )}
              {/* BUTON CHERCHER  */}
              <Pressable
                onPress={() => navigate('SearchLocation')}
                style={{
                  marginTop: 20,
                  alignItems: 'center',
                  backgroundColor: '#ecf0f1',
                  width: '100%',
                  height: 40,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  borderRadius: 50,
                }}>
                <Image
                  source={search}
                  style={{width: 25, height: 25, right: 10}}
                />
                <Text style={{fontSize: 17, fontFamily: 'OpenSans-light'}}>
                  Chercher par rue, quartier, ville ...
                </Text>
              </Pressable>
              {/* BUTON UTILISER  */}
              <TouchableOpacity
                style={{
                  marginTop: '20%',
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  alignItems: 'center',
                }}>
                <Icon bgIcon="#ecf0f1" sizeIcon={25} icon={navigation} />
                <Text
                  style={{
                    fontSize: 16,
                    color: '#23A082',
                    fontFamily: 'OpenSans-Bold',
                    left: 20,
                  }}>
                  Utiliser la position actuelle
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                }}>
                <Icon bgIcon="#ecf0f1" sizeIcon={25} icon={flag} />
                <Text
                  style={{fontSize: 16, left: 20, fontFamily: 'OpenSans-Bold'}}>
                  Unnamed Road, Yamoussoukro {'\n'}Côte d'ivoire
                </Text>
              </View>
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  containerBottomSheet: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4,
  },
  // item: {
  //   padding: 20,
  //   justifyContent: 'center',
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   marginVertical: 10,
  // },
});

export default AdresseMapComponent;
