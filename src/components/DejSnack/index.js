import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import styles from './styles';
import leftArrow from '../../../assets/images/leftArrow.png';
import sucrerie from '../../../assets/images/sucrerie.png';
import fastDelivery from '../../../assets/images/fastDelivery.png';
import pouce from '../../../assets/images/pouce.png';
import clock from '../../../assets/images/clock.png';
import hamburger from '../../../assets/images/hamburger.png';
import cheeseTwo from '../../../assets/images/cheeseTwo.png';
import bakery from '../../../assets/images/bakery.png';
import cheese from '../../../assets/images/cheese.png';
import menu from '../../../assets/images/menu.png';
import croissant from '../../../assets/images/croissant.png';
import bread from '../../../assets/images/bread.png';
import delivery from '../../../assets/images/delivery.png';
import running from '../../../assets/images/running.png';
import search from '../../../assets/images/search.png';
import user from '../../../assets/images/user.png';
import food from '../../../assets/images/food.jpg';
import ingredient from '../../../assets/images/ingredient.jpg';
import coctail from '../../../assets/images/coctail.jpg';
import Icon from '../common/Icon';
import Button from '../common/Button';
import {Backdrop} from 'react-native-backdrop';
import {Chip} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const datas = [
  {id: 1, aliment: 'Gâteau au pain'},
  {id: 2, aliment: 'Gâteau au pain'},
  {id: 3, aliment: 'Gâteau au pain'},
  {id: 4, aliment: 'Gâteau au pain'},
  {id: 5, aliment: 'Gâteau au pain'},
];

const DejSnackComponent = () => {
  const [isButonActive, setIsButonActive] = useState(false);
  const [isVisibleBottom, setIsVisibleBottom] = useState(false);
  const {navigate, toggleDrawer, goBack} = useNavigation();

  const handleOpen = () => {
    setIsVisibleBottom(true);
  };

  const handleClose = () => {
    setIsVisibleBottom(false);
  };

  const renderItem = () => {
    return (
      <>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigate('DetailsRestaurant')}>
          <ImageBackground
            imageStyle={{borderRadius: 10}}
            source={ingredient}
            style={{width: '100%', height: 160}}>
            <View
              style={{
                // flexDirection: 'column',
                alignItems: 'center',
                marginTop: 50,
                // justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontWeight: 'bold',
                  fontFamily: 'OpenSans-Bold',
                }}>
                Baguette Francaise
              </Text>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'bold',
                    backgroundColor: 'black',
                  }}>
                  Patisserie
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
              marginTop: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={user} style={{width: 20, height: 20}} />
              <Text>98%</Text>
              <View style={{flexDirection: 'row', marginLeft: 140}}>
                <Image source={user} style={{width: 20, height: 20}} />
                <View style={{backgroundColor: '#ffa502', borderRadius: 5}}>
                  <Text style={{fontWeight: 'bold'}}>GRATUIT</Text>
                </View>
                <Text style={{fontWeight: 'bold'}}> .35-44 min</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const renderList = ({item}) => {
    return (
      <>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigate('DetailsRestaurant')}>
          <ImageBackground
            imageStyle={{borderRadius: 10}}
            source={food}
            style={{width: 320, height: 160}}>
            <View
              style={{
                // flexDirection: 'column',
                alignItems: 'center',
                marginTop: 50,
                // justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontWeight: 'bold',
                  fontFamily: 'OpenSans-Bold',
                }}>
                Baguette Francaise
              </Text>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'bold',
                    backgroundColor: 'black',
                  }}>
                  Patisserie
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
              marginTop: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={user} style={{width: 20, height: 20}} />
              <Text>98%</Text>
              <View style={{flexDirection: 'row', marginLeft: 70}}>
                <Image source={user} style={{width: 20, height: 20}} />
                <View style={{backgroundColor: '#ffa502', borderRadius: 5}}>
                  <Text style={{fontWeight: 'bold'}}>GRATUIT</Text>
                </View>
                <Text style={{fontWeight: 'bold'}}> .35-44 min</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
      // </TouchableOpacity>
    );
  };

  const renderOtherList = () => {
    return (
      <>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigate('DetailsRestaurant')}>
          <ImageBackground
            imageStyle={{borderRadius: 10}}
            source={coctail}
            style={{width: '100%', height: 160}}>
            <View
              style={{
                // flexDirection: 'column',
                alignItems: 'center',
                marginTop: 50,
                // justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontFamily: 'OpenSans-Regular',
                }}>
                Baguette Francaise
              </Text>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 'bold',
                    backgroundColor: 'black',
                  }}>
                  Patisserie
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
              marginTop: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={user} style={{width: 20, height: 20}} />
              <Text>98%</Text>
              <View style={{flexDirection: 'row', marginLeft: 140}}>
                <Image source={user} style={{width: 20, height: 20}} />
                <View style={{backgroundColor: '#ffa502', borderRadius: 5}}>
                  <Text style={{fontWeight: 'bold'}}>GRATUIT</Text>
                </View>
                <Text style={{fontWeight: 'bold'}}> .35-44 min</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={datas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View style={{padding: 20}}>
              {/* HEADER COMPONENT  */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Icon onPress={() => goBack()} sizeIcon={15} icon={leftArrow} />
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'OpenSans-Regular',
                    color: 'black',
                  }}>
                  P'tit déj et snack
                </Text>
                <View
                  style={{
                    backgroundColor: 'grey',
                    width: '20%',
                    height: 40,
                    borderRadius: 50,
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    onPress={() => setIsButonActive(!isButonActive)}
                    style={{
                      backgroundColor:
                        isButonActive === false ? 'orange' : 'grey',
                      width: '50%',
                      height: 40,
                      borderRadius: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={fastDelivery}
                      style={{width: 15, height: 15}}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setIsButonActive(!isButonActive)}
                    style={{
                      backgroundColor:
                        isButonActive === false ? 'grey' : 'orange',
                      width: '50%',
                      height: 40,
                      borderRadius: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={running} style={{width: 15, height: 15}} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* ZONE RECHERCHE  */}
              <Pressable
                onPress={() => navigate('SearchLocation')}
                style={{
                  backgroundColor: '#ced6e0',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 50,
                  height: 45,
                  marginTop: 20,
                }}>
                <Image
                  source={search}
                  style={{width: 18, height: 18, left: 70}}
                />
                <Text
                  style={{
                    fontSize: 18,
                    left: 80,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  Lieu ou produit
                </Text>
              </Pressable>

              {/* CATEGORIES */}
              <View style={{flexDirection: 'row'}}>
                <View style={{marginTop: 20}}>
                  <Icon
                    sizeIcon={15}
                    icon={menu}
                    bgIcon="#eccc68"
                    onPress={() => setIsVisibleBottom(true)}
                  />
                  <Text style={{fontFamily: 'OpenSans-Regular'}}>Tout ></Text>
                </View>

                {/* BACKDROP  */}

                {/* ..... */}
                <View style={{marginTop: 20, marginLeft: 20}}>
                  <Icon
                    sizeIcon={15}
                    icon={cheese}
                    bgIcon="#eccc68"
                    onPress={() => console.log('TOUT')}
                  />
                  <Text style={{fontFamily: 'OpenSans-Regular'}}>
                    Francais{' '}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image source={user} style={{width: 20, height: 20}} />
                <Text
                  style={{
                    left: 20,
                    fontSize: 20,
                    fontFamily: 'OpenSans-Bold',
                    color: 'black',
                  }}>
                  Le meilleur à proximité
                </Text>
              </View>

              {/* LISTS  */}
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={datas}
                renderItem={renderList}
                keyExtractor={item => item.id}
              />

              {/* DEUXIEME TEXTE */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image source={user} style={{width: 20, height: 20}} />
                <Text
                  style={{
                    left: 20,
                    fontSize: 20,
                    fontFamily: 'OpenSans-Bold',
                    color: 'black',
                  }}>
                  Promotions
                </Text>
              </View>

              {/* DEUXIEME LISTE  */}
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={datas}
                renderItem={renderList}
                keyExtractor={item => item.id}
              />
            </View>
          }
          ListFooterComponent={
            <View style={{padding: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#eccc68',
                  width: '100%',
                  height: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 25, fontFamily: 'OpenSans-Regular'}}>
                  Recevez des {'\n'} crédits{' '}
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    GRATUITS
                  </Text>
                </Text>
              </TouchableOpacity>

              <FlatList
                data={datas}
                renderItem={renderOtherList}
                keyExtractor={item => item.id}
              />
              {/* BUTTON  */}

              {/* .... */}
              <Button title="Commande personnalisée" />
            </View>
          }
        />
      </View>
      <Backdrop
        visible={isVisibleBottom}
        handleOpen={handleOpen}
        handleClose={handleClose}
        onClose={() => {}}
        swipeConfig={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}
        animationConfig={{
          speed: 14,
          bounciness: 4,
        }}
        overlayColor="rgba(0,0,0,0.32)"
        backdropStyle={{
          backgroundColor: 'white',
        }}
        containerStyle={{
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: '85%',
        }}>
        <View style={{}}>
          <Text
            style={{
              fontSize: 25,
              padding: 20,
              fontFamily: 'OpenSans-Bold',
              color: 'black',
            }}>
            Trier par
          </Text>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-between',
            }}>
            <Chip icon={clock} onPress={() => console.log('Pressed')}>
              Autour de nous
            </Chip>
            <Chip icon={pouce} onPress={() => console.log('Pressed')}>
              Meilleure note
            </Chip>
          </View>
          <View style={{padding: 20, width: '50%'}}>
            <Chip icon={fastDelivery} onPress={() => console.log('Pressed')}>
              Frais de livraison
            </Chip>
          </View>

          {/* TRIER PAR  */}
          <View style={{padding: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
                textAlign: 'center',
              }}>
              Types de P'tit déj et snacks
            </Text>
          </View>

          {/* TYPES DEJ  */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image source={bread} style={{width: 30, height: 30}} />
                <Text style={{fontFamily: 'OpenSans-Regular'}}>
                  Boulangerie
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={hamburger} style={{width: 30, height: 30}} />
                <Text style={{fontFamily: 'OpenSans-Regular'}}>Burgers</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={bakery} style={{width: 30, height: 30}} />
                <Text style={{fontFamily: 'OpenSans-Regular'}}>
                  Cuisine locale
                </Text>
              </View>
            </View>
            {/* DEUXIEME BLOC */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
              }}>
              <View style={{alignItems: 'center'}}>
                <Image source={cheeseTwo} style={{width: 30, height: 30}} />
                <Text style={{fontFamily: 'OpenSans-Regular'}}>Francais</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={croissant} style={{width: 30, height: 30}} />
                <Text style={{fontFamily: 'OpenSans-Regular'}}>Pâtisserie</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={croissant} style={{width: 30, height: 30}} />
                <Text
                  style={{fontFamily: 'OpenSans-Regular', textAlign: 'center'}}>
                  Petit -déjeuner{'\n'}et snacks
                </Text>
              </View>
            </View>

            <View style={{padding: 20, alignItems: 'center'}}>
              <Image source={sucrerie} style={{width: 30, height: 30}} />
              <Text style={{fontFamily: 'OpenSans-Regular'}}>Sucrerie</Text>
            </View>
          </View>
          {/* BUTTON */}
          <View style={{padding: 20}}>
            <TouchableOpacity
              onPress={() => console.log('vjhh')}
              style={{
                alignItems: 'center',
                backgroundColor: '#23A082',
                width: '100%',
                height: 55,
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontFamily: 'OpenSans-Bold',
                }}>
                Appliquer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Backdrop>
    </View>
  );
};

export default DejSnackComponent;
