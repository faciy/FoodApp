import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import user from '../../../assets/images/user.png';
import foodDelivery from '../../../assets/images/foodDelivery.png';
import Icon from '../common/Icon';
import {
  PanGestureHandler,
  State,
  RotationGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const ShopsComponent = () => {
  const {navigate, toggleDrawer} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{zIndex: 1}}>
          <Icon
            onPress={() => console.log('Icon')}
            bgIcon="#dfe6e9"
            sizeIcon={25}
            icon={user}
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log('huguygygu')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '90%',
            height: 40,
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 50,
            zIndex: 1,
          }}>
          <Icon sizeIcon={15} icon={user} />
          <Text>Qu'est ce qu'on vous propose</Text>
        </TouchableOpacity>
      </View>

      {/* BLOC  */}
      <View style={{padding: 20, marginTop: '50%'}}>
        {/* FIRST  */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                // marginTop: '50%',
                borderLeftWidth: 5,
                borderRightWidth: 10,
                borderBottomWidth: 2,
              }}>
              <Icon sizeIcon={50} icon={foodDelivery} />
              <Text
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                Autres categories
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
              <Icon sizeIcon={50} icon={foodDelivery} />
              <Text
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                Amour et fleurs
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
          <TapGestureHandler onHandlerStateChange={() => navigate('DejSnack')}>
            <Animated.View
              style={{
                width: 130,
                height: 130,
                backgroundColor: 'white',
                borderRadius: 130,
                alignItems: 'center',
                justifyContent: 'center',
                // marginTop: '50%',
                marginLeft: '30%',
                borderLeftWidth: 5,
                borderRightWidth: 10,
                borderBottomWidth: 2,
              }}>
              <Icon sizeIcon={50} icon={foodDelivery} />
              <Text
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                Beauté et santé
              </Text>
            </Animated.View>
          </TapGestureHandler>

          {/* TWO  */}
        </View>
        {/* FIN  */}
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'OpenSans-Regular',
              color: 'black',
            }}>
            Boutiques
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ShopsComponent;
