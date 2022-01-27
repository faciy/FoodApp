import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import styles from './styles';
import food from '../../../assets/images/food.jpg';
import leftArrow from '../../../assets/images/leftArrow.png';
import user from '../../../assets/images/user.png';
import search from '../../../assets/images/search.png';
import Icon from '../common/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const HEADER_HEIGHT = 200;
const CARD_HEIGHT = 250;

const datas = [
  {
    id: 1,
    title: 'The Hunger Games',
  },
  {
    id: 2,
    title: 'Harry Potter and the Order of the Phoenix',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
  },
  {
    id: 5,
    title: 'Twilight',
  },
  {
    id: 6,
    title: 'The Book Thief',
  },
  {
    id: 7,
    title: 'The Chronicles of Narnia',
  },
  {
    id: 8,
    title: 'Animal Farm',
  },
  {
    id: 9,
    title: 'Gone with the Wind',
  },
  {
    id: 10,
    title: 'The Shadow of the Wind',
  },
  {
    id: 11,
    title: 'The Fault in Our Stars',
  },
  {
    id: 12,
    title: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    id: 13,
    title: 'The Giving Tree',
  },
  {
    id: 14,
    title: 'Wuthering Heights',
  },
  {
    id: 15,
    title: 'The Da Vinci Code',
  },
];

const DetailsRestaurant = () => {
  const offset = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();
  const [isButonActive, setIsButonActive] = useState(false);
  const {navigate, toggleDrawer} = useNavigation();

  const headerHeight = offset.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 70],
    extrapolate: 'clamp',
  });

  const headerCard = offset.interpolate({
    inputRange: [0, CARD_HEIGHT + insets.top],
    outputRange: [CARD_HEIGHT + insets.top, insets.top + 70],
    extrapolate: 'clamp',
  });

  const opacityAnimated = offset.interpolate({
    inputRange: [0, 80],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const backgroundColorAnimated = offset.interpolate({
    inputRange: [0, 400],
    outputRange: ['transparent', '#FCC332'],
    extrapolate: 'clamp',
  });

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
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <View style={{}}>
          <Animated.Image
            source={food}
            style={{
              width: '100%',
              height: headerHeight,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1,
            }}
          />
          <Animated.View
            style={{
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'absolute',
              zIndex: 1,
              backgroundColor: backgroundColorAnimated,
              width: '100%',
              height: 70,
            }}>
            <Image
              source={leftArrow}
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
              <Icon sizeIcon={15} icon={search} />
              <TextInput
                placeholder="Recherche chez Samer"
                style={{fontSize: 15}}
              />
            </View>
          </Animated.View>
          {/* CARD  */}
          <Animated.View
            style={{
              width: 350,
              height: headerCard,
              marginLeft: 20,
              marginTop: 100,
              backgroundColor: 'white',
              position: 'absolute',
              zIndex: 1,
              borderRadius: 10,
              padding: 20,
              opacity: opacityAnimated,
              alignSelf: 'center',
              shadowColor: 'rgba(0, 0, 0, 0.50)',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 30,
            }}>
            <Animated.Text
              style={{
                textAlign: 'center',
                fontFamily: 'OpenSans-Bold',
                fontSize: 25,
                color: 'black',
                opacity: opacityAnimated,
              }}>
              Chez Samer
            </Animated.Text>
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
                  backgroundColor: isButonActive === false ? 'orange' : 'grey',
                  width: '120%',
                  height: 40,
                  borderRadius: 20,
                }}>
                <Icon sizeIcon={15} icon={user} />
                <Text style={{fontFamily: 'OpenSans-Regular', color: 'black'}}>
                  Livraison
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setIsButonActive(!isButonActive)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: isButonActive === false ? 'grey' : 'orange',
                  width: '100%',
                  height: 40,
                  borderRadius: 20,
                }}>
                <Icon sizeIcon={15} icon={user} />
                <Text style={{fontFamily: 'OpenSans-Regular', color: 'black'}}>
                  A emporter
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                top: 20,
                textAlign: 'center',
                fontFamily: 'OpenSans-Regular',
              }}>
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
          </Animated.View>
        </View>

        <FlatList
          style={{backgroundColor: 'white'}}
          contentContainerStyle={{
            alignItems: 'center',
            // paddingTop: 200,
            paddingHorizontal: 20,
            top: 220,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: offset}}}],
            {useNativeDriver: false},
          )}
          showsVerticalScrollIndicator={false}
          data={datas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View style={{top: 160}}>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: 'OpenSans-Bold',
                  color: 'black',
                }}>
                CREPES
              </Text>
            </View>
          }
          ListFooterComponent={<View style={{height: 200}} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DetailsRestaurant;
