import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
import {requestLocationPermission} from '../utils/Permissions';
import styles from './styles';
import user from '../../assets/images/user.png';
import foodDelivery from '../../assets/images/foodDelivery.png';
import food from '../../assets/images/food.jpg';
import rightArrow from '../../assets/images/rightArrow.png';
import Icon from '../components/common/Icon';
import BottomSheet from 'react-native-bottomsheet-reanimated';
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

const HomeComponent = () => {
  const fadeAmin = useRef(new Animated.Value(0)).current;

  const sheetRef = useRef('BottomSheet');
  const {navigate} = useNavigation();

  const rotateInterpolate = fadeAmin.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '-360deg'],
  });

  // let lastRotate = 0;

  // const onRotateGestureEvent = Animated.event(
  //   [{nativeEvent: {rotation: fadeAmin}}],
  //   {useNativeDriver: true},
  // );

  // const onRotateHandlerStateChange = event => {
  //   if (event.nativeEvent.oldState === State.ACTIVE) {
  //     lastRotate += event.nativeEvent.rotation;
  //     fadeAmin.setOffset(lastRotate);
  //     fadeAmin.setValue(0);
  //   }
  // };

  const handleAnimation = () => {
    Animated.timing(fadeAmin, {
      toValue: 5040,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const animateRotate = {
    transform: [{rotate: rotateInterpolate}],
  };

  const renderItem = () => {
    return (
      <TouchableOpacity
        onPress={() => navigate('DetailsRestaurant')}
        style={styles.body}>
        <View style={{width: 160}}>
          <Image
            source={food}
            style={{width: 160, height: 120, borderRadius: 10}}
          />
          <Text>Chez Samejrdrrtjfuffuyfiuyfuyfuyftftfytr</Text>
          <View
            style={{
              position: 'absolute',
              top: '55%',
              left: 10,
              backgroundColor: 'black',
              width: '60%',
              borderRadius: 5,
              opacity: 0.8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Chawarma</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: -20,
            bottom: 5,
          }}>
          <Icon sizeIcon={15} icon={user} />
          <Text>93 %</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: 'orange',
              borderRadius: 5,
              height: 20,
              width: 90,
            }}>
            <View style={{right: 5}}>
              <Icon sizeIcon={15} icon={user} />
            </View>
            <Text style={{left: -10, fontWeight: 'bold'}}>GRATUIT</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // const onChange = () =

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon onPress={() => {}} bgIcon="#dfe6e9" sizeIcon={25} icon={user} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'grey',
            width: '70%',
            height: 40,
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 50,
          }}>
          <Icon sizeIcon={15} icon={user} />
          <TextInput placeholder="Qu'est ce qu'on vous propose" />
        </View>
        <Icon onPress={() => {}} bgIcon="#dfe6e9" sizeIcon={25} icon={user} />
      </View>
      {/* Buton Emplacement */}
      <TouchableOpacity
        style={{
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold'}}>Emplacement actuelle</Text>
        <Icon sizeIcon={15} icon={user} />
      </TouchableOpacity>

      {/* GRAND CERCLE  */}
      <Pressable onPress={() => handleAnimation()}>
        {/* FIRST  */}
        <Animated.View style={[styles.cercle, animateRotate]}>
          <View
            style={{
              width: 130,
              height: 130,
              backgroundColor: 'white',
              borderRadius: 130,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: '50%',
              borderLeftWidth: 5,
              borderRightWidth: 10,
              borderBottomWidth: 2,
            }}>
            <Icon sizeIcon={50} icon={foodDelivery} />
            <Text
              style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              Magique
            </Text>
          </View>

          {/* SECOND  */}
          <View
            style={{
              width: 130,
              height: 130,
              backgroundColor: 'white',
              borderRadius: 130,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              top: '0%',
              position: 'absolute',
              borderLeftWidth: 5,
              borderRightWidth: 10,
              borderBottomWidth: 2,
            }}>
            <Icon sizeIcon={50} icon={foodDelivery} />
            <Text
              style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              P'tit déj et snacks
            </Text>
          </View>

          {/* THIRST  */}
          <View
            style={{
              width: 130,
              height: 130,
              backgroundColor: 'white',
              borderRadius: 130,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              top: '23%',
              right: '2%',
              borderLeftWidth: 5,
              borderRightWidth: 10,
              borderBottomWidth: 2,
              position: 'absolute',
            }}>
            <Icon sizeIcon={50} icon={foodDelivery} />
            <Text
              style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              J'ai faim
            </Text>
          </View>

          {/* QUARTRE  */}
          <View
            style={{
              width: 130,
              height: 130,
              backgroundColor: 'white',
              borderRadius: 130,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              top: '58%',
              right: '10%',
              borderLeftWidth: 5,
              borderRightWidth: 10,
              borderBottomWidth: 2,
              position: 'absolute',
            }}>
            <Icon sizeIcon={50} icon={foodDelivery} />
            <Text
              style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              Supermarché & Alcools
            </Text>
          </View>

          {/* CINQ  */}
          <View
            style={{
              width: 130,
              height: 130,
              backgroundColor: 'white',
              borderRadius: 130,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              top: '60%',
              right: '55%',
              borderLeftWidth: 5,
              borderRightWidth: 10,
              borderBottomWidth: 2,
              position: 'absolute',
            }}>
            <Icon sizeIcon={50} icon={foodDelivery} />
            <Text
              style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              Livraison Express
            </Text>
          </View>

          {/* SIX  */}
          <View
            style={{
              width: 130,
              height: 130,
              backgroundColor: 'white',
              borderRadius: 130,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: '45%',
              right: '65%',
              borderLeftWidth: 5,
              borderRightWidth: 10,
              borderBottomWidth: 2,
              position: 'absolute',
            }}>
            <Icon sizeIcon={50} icon={foodDelivery} />
            <Text
              style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              Nos boutiques
            </Text>
          </View>
        </Animated.View>
      </Pressable>
      <BottomSheet
        // keyboardAware
        bottomSheerColor="#FFFFFF"
        ref={sheetRef}
        initialPosition={'10%'} //200, 300
        snapPoints={['10%', '20%', '30%', '40%', '50%', '90%']}
        isBackDrop={true}
        isBackDropDismissByPress={true}
        isRoundBorderWithTipHeader={true}
        onChangeSnap={e => console.log(e)}
        // backDropColor="red"
        // isModal
        // containerStyle={{backgroundColor:"red"}}
        // tipStyle={{backgroundColor:"red"}}
        // headerStyle={{backgroundColor:"red"}}
        // bodyStyle={{backgroundColor:"red",flex:1}}
        header={
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon sizeIcon={25} icon={user} />
              <Text style={{fontSize: 20}}>Vous pourriez aimer</Text>
            </View>
            <Icon sizeIcon={25} icon={rightArrow} />
          </View>
        }
        body={
          <FlatList
            data={datas}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        }
      />
    </View>
  );
};

export default HomeComponent;
