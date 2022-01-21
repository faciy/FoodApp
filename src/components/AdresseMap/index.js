import React, {useRef} from 'react';
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
import user from '../../../assets/images/user.png';
import Icon from '../common/Icon';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from 'react-native-bottomsheet-reanimated';

const windowHeight = Dimensions.get('window').height;

const datas = [{id: 1, name: 'charles'}];

const AdresseMapComponent = () => {
  const {navigate, toggleDrawer, goBack} = useNavigation();

  const sheetRef = useRef('BottomSheet');

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
          sizeIcon={25}
          icon={user}
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
          onChangeSnap={e => console.log(e)}
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
                  <Icon bgIcon="white" sizeIcon={25} icon={user} />
                  <Text style={{left: 5}}>
                    Toucher ici pour afficher votre {'\n'} position actuelle{' '}
                  </Text>
                </View>
                <View>
                  <Icon sizeIcon={20} icon={user} />
                </View>
              </TouchableOpacity>
            </View>
          }
          body={
            <View style={{padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Ajouter une adresse de livraison
              </Text>
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
                  source={unlock}
                  style={{width: 25, height: 25, right: 10}}
                />
                <Text style={{fontSize: 18}}>
                  Chercher par rue, quartier, ville ...
                </Text>
              </Pressable>
              {/* BUTON UTILISER  */}
              <TouchableOpacity
                style={{
                  marginTop: '20%',
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                }}>
                <Image
                  source={unlock}
                  style={{width: 25, height: 25, right: 15, tintColor: 'green'}}
                />
                <Text style={{fontSize: 16, color: 'green'}}>
                  Utiliser la position actuelle
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                }}>
                <Image
                  source={unlock}
                  style={{width: 25, height: 25, right: 15}}
                />
                <Text style={{fontSize: 16}}>
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
