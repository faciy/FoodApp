import React, {useEffect, useRef, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {requestLocationPermission} from '../utils/Permissions';
import styles from './styles';
import downArrow from '../../assets/images/downArrow.png';
import foodDelivery from '../../assets/images/foodDelivery.png';
import food from '../../assets/images/food.jpg';
import rightArrow from '../../assets/images/rightArrow.png';
import search from '../../assets/images/search.png';
import user from '../../assets/images/user.png';
import gift from '../../assets/images/gift.png';
import Icon from '../components/common/Icon';
import BottomSheet from 'react-native-bottomsheet-reanimated';
import {useNavigation} from '@react-navigation/native';
import {
  PanGestureHandler,
  State,
  RotationGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const {add, set, block, cond, eq, multiply, max, concat} = Animated;

const useRotate = () => {
  const rotationValue = useRef(new Animated.Value(0)).current;
  const offset = useRef(new Animated.Value(0)).current;

  const handleRotate = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({rotation, state}) =>
          block([
            set(rotationValue, add(rotation, offset)),
            cond(eq(state, State.END), [set(offset, add(rotation, offset))]),
          ]),
      },
    ]);
  }, [offset, rotationValue]);

  return {rotation: rotationValue, offset, handleRotate};
};

const usePan = () => {
  const offsetX = useRef(new Animated.Value(0)).current;
  const offsetY = useRef(new Animated.Value(0)).current;
  const transX = useRef(new Animated.Value(0)).current;
  const transY = useRef(new Animated.Value(0)).current;

  const handlePan = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({translationX: x, translationY: y, state}) =>
          block([
            set(transX, add(offsetX, x)),
            set(transY, add(offsetY, y)),
            cond(eq(state, State.END), [
              set(transX, add(0, 0)),
              set(transY, add(0, 0)),
            ]),
          ]),
      },
    ]);
  }, [offsetX, offsetY, transX, transY]);

  return {offsetX, offsetY, transX, transY, handlePan};
};

const usePanTwo = () => {
  const offsetXTwo = useRef(new Animated.Value(0)).current;
  const offsetYTwo = useRef(new Animated.Value(0)).current;
  const transXTwo = useRef(new Animated.Value(0)).current;
  const transYTwo = useRef(new Animated.Value(0)).current;

  const handlePanTwo = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({translationX: x, translationY: y, state}) =>
          block([
            set(transXTwo, add(offsetXTwo, x)),
            set(transYTwo, add(offsetYTwo, y)),
            cond(eq(state, State.END), [
              set(transXTwo, add(0, 0)),
              set(transYTwo, add(0, 0)),
            ]),
          ]),
      },
    ]);
  }, [offsetXTwo, offsetYTwo, transXTwo, transYTwo]);

  return {offsetXTwo, offsetYTwo, transXTwo, transYTwo, handlePanTwo};
};

const usePanThree = () => {
  const offsetXThree = useRef(new Animated.Value(0)).current;
  const offsetYThree = useRef(new Animated.Value(0)).current;
  const transXThree = useRef(new Animated.Value(0)).current;
  const transYThree = useRef(new Animated.Value(0)).current;

  const handlePanThree = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({translationX: x, translationY: y, state}) =>
          block([
            set(transXThree, add(offsetXThree, x)),
            set(transYThree, add(offsetYThree, y)),
            cond(eq(state, State.END), [
              set(transXThree, add(0, 0)),
              set(transYThree, add(0, 0)),
            ]),
          ]),
      },
    ]);
  }, [offsetXThree, offsetYThree, transXThree, transYThree]);

  return {offsetXThree, offsetYThree, transXThree, transYThree, handlePanThree};
};

const usePanFour = () => {
  const offsetXFour = useRef(new Animated.Value(0)).current;
  const offsetYFour = useRef(new Animated.Value(0)).current;
  const transXFour = useRef(new Animated.Value(0)).current;
  const transYFour = useRef(new Animated.Value(0)).current;

  const handlePanFour = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({translationX: x, translationY: y, state}) =>
          block([
            set(transXFour, add(offsetXFour, x)),
            set(transYFour, add(offsetYFour, y)),
            cond(eq(state, State.END), [
              set(transXFour, add(0, 0)),
              set(transYFour, add(0, 0)),
            ]),
          ]),
      },
    ]);
  }, [offsetXFour, offsetYFour, transXFour, transYFour]);

  return {offsetXFour, offsetYFour, transXFour, transYFour, handlePanFour};
};

const usePanFive = () => {
  const offsetXFive = useRef(new Animated.Value(0)).current;
  const offsetYFive = useRef(new Animated.Value(0)).current;
  const transXFive = useRef(new Animated.Value(0)).current;
  const transYFive = useRef(new Animated.Value(0)).current;

  const handlePanFive = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({translationX: x, translationY: y, state}) =>
          block([
            set(transXFive, add(offsetXFive, x)),
            set(transYFive, add(offsetYFive, y)),
            cond(eq(state, State.END), [
              set(transXFive, add(0, 0)),
              set(transYFive, add(0, 0)),
            ]),
          ]),
      },
    ]);
  }, [offsetXFive, offsetYFive, transXFive, transYFive]);

  return {offsetXFive, offsetYFive, transXFive, transYFive, handlePanFive};
};

const usePanSix = () => {
  const offsetXSix = useRef(new Animated.Value(0)).current;
  const offsetYSix = useRef(new Animated.Value(0)).current;
  const transXSix = useRef(new Animated.Value(0)).current;
  const transYSix = useRef(new Animated.Value(0)).current;

  const handlePanSix = useMemo(() => {
    return Animated.event([
      {
        nativeEvent: ({translationX: x, translationY: y, state}) =>
          block([
            set(transXSix, add(offsetXSix, x)),
            set(transYSix, add(offsetYSix, y)),
            cond(eq(state, State.END), [
              set(transXSix, add(0, 0)),
              set(transYSix, add(0, 0)),
            ]),
          ]),
      },
    ]);
  }, [offsetXSix, offsetYSix, transXSix, transYSix]);

  return {offsetXSix, offsetYSix, transXSix, transYSix, handlePanSix};
};

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
];

const HomeComponent = () => {
  const sheetRef = useRef('BottomSheet');
  const {navigate} = useNavigation();

  const {rotation, handleRotate} = useRotate();
  const {transX, transY, handlePan} = usePan();
  const {transXTwo, transYTwo, handlePanTwo} = usePanTwo();
  const {transXThree, transYThree, handlePanThree} = usePanThree();
  const {transXFour, transYFour, handlePanFour} = usePanFour();
  const {transXFive, transYFive, handlePanFive} = usePanFive();
  const {transXSix, transYSix, handlePanSix} = usePanSix();

  const handleFaim = () => {
    navigate('Hungry');
  };

  const handleLivraison = () => {
    navigate('DetailsCommande');
  };

  const handleBoutique = () => {
    navigate('Shops');
  };

  const handleMagique = () => {
    navigate('Magic');
  };

  const handleSupermarche = () => {
    navigate('Supermarket');
  };

  const handleDej = () => {
    navigate('DejSnack');
  };

  const handleGift = () => {
    navigate('PromoReview');
  };

  const handleShowProfil = () => {
    toggleDrawer();
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
          <Text style={{fontFamily: 'OpenSans-Bold', color: 'black'}}>
            Chez Samer
          </Text>
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
            <Text style={{color: 'white', fontFamily: 'OpenSans-Bold'}}>
              Chawarma
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            left: -10,
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
            <Text
              style={{left: -10, fontFamily: 'OpenSans-Bold', color: 'black'}}>
              GRATUIT
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // const onChange = () =

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.otherContainer}>
        <View
          style={{
            // backgroundColor: 'yellow',
            width: '120%',
            height: 65,
            position: 'absolute',
            zIndex: 1,
            shadowColor: 'rgba(0, 0, 0, 0.50)',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 30,
          }}></View>
        <View style={styles.header}>
          <View style={{}}>
            <Icon
              onPress={() => handleShowProfil()}
              bgIcon="#ffeaa7"
              sizeIcon={20}
              icon={user}
            />
          </View>
          <TouchableOpacity
            onPress={() => console.log('huguygygu')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#ffeaa7',
              width: '70%',
              height: 40,
              justifyContent: 'center',
              flexDirection: 'row',
              borderRadius: 50,
              zIndex: 1,
            }}>
            <Icon sizeIcon={15} icon={search} />
            <Text style={{fontFamily: 'OpenSans-Regular'}}>
              Qu'est ce qu'on vous propose
            </Text>
          </TouchableOpacity>
          <View style={{}}>
            <Icon
              bgIcon="#ffeaa7"
              sizeIcon={20}
              icon={gift}
              onPress={() => handleGift()}
            />
          </View>
        </View>
        {/* Buton Emplacement */}
        <TouchableOpacity
          onPress={() => navigate('AdresseMap')}
          style={{
            alignItems: 'center',
            // marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            zIndex: 0.5,
          }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Bold',
              textAlign: 'center',
              color: 'black',
            }}>
            Emplacement actuelle
          </Text>
          <Icon sizeIcon={15} icon={downArrow} />
        </TouchableOpacity>

        {/* GRAND CERCLE  */}
        <RotationGestureHandler
          onGestureEvent={handleRotate}
          onHandlerStateChange={handleRotate}>
          {/* FIRST  */}
          <Animated.View
            style={[
              styles.cercle,
              {transform: [{rotate: concat(rotation, 'rad')}]},
            ]}>
            <PanGestureHandler
              onGestureEvent={handlePan}
              onHandlerStateChange={handlePan}>
              <Animated.View
                style={[
                  styles.first,
                  {transform: [{translateX: transX, translateY: transY}]},
                ]}>
                <TapGestureHandler onHandlerStateChange={handleMagique}>
                  <Animated.View>
                    <Icon sizeIcon={50} icon={foodDelivery} />
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'center',
                        fontFamily: 'OpenSans-Regular',
                        color: 'black',
                      }}>
                      Magique
                    </Text>
                  </Animated.View>
                </TapGestureHandler>
              </Animated.View>
            </PanGestureHandler>

            {/* SECOND  */}
            <PanGestureHandler
              onGestureEvent={handlePanTwo}
              onHandlerStateChange={handlePanTwo}>
              <Animated.View
                style={[
                  styles.two,
                  {transform: [{translateX: transXTwo, translateY: transYTwo}]},
                ]}>
                <TapGestureHandler onHandlerStateChange={handleDej}>
                  <Animated.View>
                    <Icon sizeIcon={50} icon={foodDelivery} />
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'center',
                        fontFamily: 'OpenSans-Regular',
                        color: 'black',
                      }}>
                      P'tit déj et snacks
                    </Text>
                  </Animated.View>
                </TapGestureHandler>
              </Animated.View>
            </PanGestureHandler>

            {/* THIRST  */}
            <PanGestureHandler
              onGestureEvent={handlePanThree}
              onHandlerStateChange={handlePanThree}>
              <Animated.View
                style={[
                  styles.three,
                  {
                    transform: [
                      {translateX: transXThree, translateY: transYThree},
                    ],
                  },
                ]}>
                <TapGestureHandler onHandlerStateChange={handleFaim}>
                  <Animated.View>
                    <Icon sizeIcon={50} icon={foodDelivery} />
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'center',
                        fontFamily: 'OpenSans-Regular',
                        color: 'black',
                      }}>
                      J'ai faim
                    </Text>
                  </Animated.View>
                </TapGestureHandler>
              </Animated.View>
            </PanGestureHandler>

            {/* QUARTRE  */}
            <PanGestureHandler
              onGestureEvent={handlePanFour}
              onHandlerStateChange={handlePanFour}>
              <Animated.View
                style={[
                  styles.four,
                  {
                    transform: [
                      {translateX: transXFour, translateY: transYFour},
                    ],
                  },
                ]}>
                <TapGestureHandler onHandlerStateChange={handleSupermarche}>
                  <Animated.View>
                    <Icon sizeIcon={50} icon={foodDelivery} />
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'center',
                        fontFamily: 'OpenSans-Regular',
                        color: 'black',
                      }}>
                      Supermarché & Alcools
                    </Text>
                  </Animated.View>
                </TapGestureHandler>
              </Animated.View>
            </PanGestureHandler>

            {/* CINQ  */}
            <PanGestureHandler
              onGestureEvent={handlePanFive}
              onHandlerStateChange={handlePanFive}>
              <Animated.View
                style={[
                  styles.five,
                  {
                    transform: [
                      {translateX: transXFive, translateY: transYFive},
                    ],
                  },
                ]}>
                <TapGestureHandler onHandlerStateChange={handleLivraison}>
                  <Animated.View>
                    <Icon sizeIcon={50} icon={foodDelivery} />
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'center',
                        fontFamily: 'OpenSans-Regular',
                        color: 'black',
                      }}>
                      Livraison Express
                    </Text>
                  </Animated.View>
                </TapGestureHandler>
              </Animated.View>
            </PanGestureHandler>

            {/* SIX  */}
            <PanGestureHandler
              onGestureEvent={handlePanSix}
              onHandlerStateChange={handlePanSix}>
              <Animated.View
                style={[
                  styles.six,
                  {
                    transform: [{translateX: transXSix, translateY: transYSix}],
                  },
                ]}>
                <TapGestureHandler onHandlerStateChange={handleBoutique}>
                  <Animated.View>
                    <Icon sizeIcon={50} icon={foodDelivery} />
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'center',
                        fontFamily: 'OpenSans-Regular',
                        color: 'black',
                      }}>
                      Nos boutiques
                    </Text>
                  </Animated.View>
                </TapGestureHandler>
              </Animated.View>
            </PanGestureHandler>
            {/* FIN  */}
          </Animated.View>
        </RotationGestureHandler>
      </View>
      <View>
        <FlatList
          scrollEventThrottle={16}
          contentContainerStyle={{
            marginTop: '160%',
            backgroundColor: 'white',
            height: '173%',
          }}
          ListHeaderComponent={
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                padding: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon sizeIcon={25} icon={user} />
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'OpenSans-Bold',
                    color: 'black',
                  }}>
                  Vous pourriez aimer
                </Text>
              </View>
              <Icon sizeIcon={20} icon={rightArrow} />
            </View>
          }
          data={datas}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeComponent;
