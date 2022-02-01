import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './styles.js';
import user from '../../../assets/images/user.png';

import foodDelivery from '../../../assets/images/foodDelivery.png';
import pizza from '../../../assets/images/pizza.png';
import recette from '../../../assets/images/recette.png';
import restaurant from '../../../assets/images/restaurant.png';
import burger from '../../../assets/images/burger.png';
import Icon from '../common/Icon';
import {
  PanGestureHandler,
  State,
  RotationGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const HungryComponent = () => {
  const {navigate, toggleDrawer} = useNavigation();

  const handleShowProfil = () => {
    toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TapGestureHandler onHandlerStateChange={handleShowProfil}>
          <Animated.View>
            <Icon bgIcon="#ffeaa7" sizeIcon={20} icon={user} />
          </Animated.View>
        </TapGestureHandler>
        <Pressable
          onPress={() => navigate('SearchLocation')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffeaa7',
            width: '85%',
            height: 40,
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 50,
            zIndex: 1,
          }}>
          <Icon sizeIcon={15} icon={user} />
          <Text>Qu'est ce qu'on vous propose</Text>
        </Pressable>
      </View>

      {/* BLOC  */}
      <View style={{padding: 20, marginTop: '50%'}}>
        {/* FIRST  */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TapGestureHandler
            onHandlerStateChange={() => navigate('DetailsRestaurant')}>
            <Animated.View
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
              <Icon sizeIcon={50} icon={burger} />
              <Text
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                Burger King
              </Text>
            </Animated.View>
          </TapGestureHandler>

          {/* TWO  */}
          <TapGestureHandler onHandlerStateChange={() => navigate('DejSnack')}>
            <Animated.View
              style={{
                width: 130,
                height: 130,
                backgroundColor: 'white',
                borderRadius: 130,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                // top: '0%',
                // position: 'absolute',
                borderLeftWidth: 5,
                borderRightWidth: 10,
                borderBottomWidth: 2,
              }}>
              <Icon sizeIcon={50} icon={restaurant} />
              <Text
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                Restaurant
              </Text>
            </Animated.View>
          </TapGestureHandler>
        </View>

        {/* THREE  */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <TapGestureHandler
            onHandlerStateChange={() => navigate('DetailsRestaurant')}>
            <Animated.View
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
              <Icon sizeIcon={50} icon={recette} />
              <Text
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                Recettes MAGGI
              </Text>
            </Animated.View>
          </TapGestureHandler>

          {/* TWO  */}
          <TapGestureHandler
            onHandlerStateChange={() => navigate('DetailsRestaurant')}>
            <Animated.View
              style={{
                width: 130,
                height: 130,
                backgroundColor: 'white',
                borderRadius: 130,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                // top: '0%',
                // position: 'absolute',
                borderLeftWidth: 5,
                borderRightWidth: 10,
                borderBottomWidth: 2,
              }}>
              <Icon sizeIcon={50} icon={pizza} />
              <Text
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                PIZZA DOUDOU
              </Text>
            </Animated.View>
          </TapGestureHandler>
        </View>
        {/* FIN  */}
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'OpenSans-Bold',
              color: 'black',
              textAlign: 'center',
            }}>
            J'ai faim
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HungryComponent;
