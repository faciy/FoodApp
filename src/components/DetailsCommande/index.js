import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from '../common/Icon';
import styles from './styles';
import ArrowLeft from '../../../assets/images/ArrowLeft.png';
import leftArrow from '../../../assets/images/leftArrow.png';
import carte from '../../../assets/images/carte.jpg';
import user from '../../../assets/images/user.png';
import Container from '../common/Container';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';
import {Backdrop} from 'react-native-backdrop';

const DetailsCommandeComponent = () => {
  const {navigate, toggleDrawer, goBack} = useNavigation();
  const [isVisibleBottom, setIsVisibleBottom] = useState(false);
  const [isVisiblePaiement, setIsVisiblePaiement] = useState(false);

  const handleOpen = () => {
    setIsVisibleBottom(true);
  };

  const handleOpenPaiement = () => {
    setIsVisiblePaiement(true);
  };

  const handleClose = () => {
    setIsVisibleBottom(false);
  };

  const handleClosePaiement = () => {
    setIsVisiblePaiement(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity onPress={() => goBack()}> */}
        <Icon onPress={() => goBack()} sizeIcon={20} icon={leftArrow} />
        {/* </TouchableOpacity> */}
        <Text
          style={{fontSize: 20, fontFamily: 'OpenSans-Bold', color: 'black'}}>
          Passage en Caisse
        </Text>
        {/* <View style={{position: 'absolute'}}>
          <Button title="Valider ma commande" />
        </View> */}
      </View>
      <Container>
        <View>
          <Text style={{fontSize: 25, fontFamily: 'OpenSans-Bold'}}>
            Votre commande
          </Text>
          <Text style={{fontFamily: 'OpenSans-Regular'}}>
            1 produit de chez{' '}
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
              }}>
              Chez Samer
            </Text>{' '}
          </Text>
        </View>
        {/* FIRST */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
                color: 'black',
              }}>
              1X Crêpre Au sucre
            </Text>
            <Text style={{fontSize: 25, color: 'green'}}>-</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
                color: 'black',
              }}>
              2000 XOF
            </Text>
            <Text style={{fontSize: 25, left: 60, color: 'green'}}>+</Text>
          </View>
        </View>
        {/* TWO  */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon onPress={() => {}} sizeIcon={20} icon={user} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
                color: 'black',
              }}>
              Des allergies ?
            </Text>
          </View>
          <Icon onPress={() => {}} sizeIcon={20} icon={ArrowLeft} />
        </View>
        {/* THREE */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon onPress={() => {}} sizeIcon={20} icon={user} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'OpenSans-Regular',
              color: 'black',
            }}>
            Des couverts ?
          </Text>
        </View>
        {/* DESSOUS */}
        <View>
          <Text style={{fontFamily: 'OpenSans-Regular', color: 'black'}}>
            Aidez-nous à éviter le gaspillage.Ne demandez {'\n'} des couverts
            que si vous en avez besoin
          </Text>
        </View>
        {/* DETAILS LIVRAISON  */}
        <View style={{marginTop: 30}}>
          <Text
            style={{fontSize: 20, fontFamily: 'OpenSans-Bold', color: 'black'}}>
            Détails de livraison
          </Text>
          {/* MAP  */}
          <ImageBackground
            imageStyle={{borderRadius: 10}}
            source={carte}
            style={{width: '100%', height: 150, marginTop: 10}}
          />
          {/* one location */}
          <TouchableOpacity
            onPress={() => navigate('AdresseMap')}
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon onPress={() => {}} sizeIcon={20} icon={user} />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                Depuis où ?
              </Text>
            </View>
            <Icon onPress={() => {}} sizeIcon={20} icon={ArrowLeft} />
          </TouchableOpacity>
          {/* two location  */}
          <TouchableOpacity
            onPress={() => navigate('AdresseMap')}
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon onPress={() => {}} sizeIcon={20} icon={user} />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                Vers où ?
              </Text>
            </View>
            <Icon onPress={() => {}} sizeIcon={20} icon={ArrowLeft} />
          </TouchableOpacity>
          {/* thre location  */}
          <TouchableOpacity
            onPress={() => setIsVisibleBottom(true)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon onPress={() => {}} sizeIcon={20} icon={user} />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                ASAP
              </Text>
            </View>
            <Icon onPress={() => {}} sizeIcon={20} icon={ArrowLeft} />
          </TouchableOpacity>
          {/* MOYEN DE PAIEMENT  */}
          <View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
              }}>
              Moyen de paiement
            </Text>
            <TouchableOpacity
              onPress={() => setIsVisiblePaiement(true)}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon onPress={() => {}} sizeIcon={20} icon={user} />
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'OpenSans-Regular',
                      color: 'black',
                    }}>
                    Sélectionnez un moyen
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'OpenSans-Regular',
                      color: 'black',
                    }}>
                    de paiement
                  </Text>
                </View>
              </View>
              <Icon onPress={() => {}} sizeIcon={20} icon={ArrowLeft} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigate('AddCodePromo')}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon onPress={() => {}} sizeIcon={20} icon={user} />
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'OpenSans-Regular',
                    color: 'black',
                  }}>
                  Vous avez un code promo{' '}
                </Text>
              </View>
              <Icon onPress={() => {}} sizeIcon={20} icon={ArrowLeft} />
            </TouchableOpacity>
          </View>
          {/* Recapulatif  */}
          <View>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'OpenSans-Bold',
                color: 'black',
              }}>
              Récapulatif
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'OpenSans-Regular',
                  color: 'black',
                }}>
                Livraison
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'OpenSans-Bold',
                  color: 'black',
                }}>
                GRATUIT
              </Text>
            </View>
            <View style={{zIndex: 1, bottom: 50}}>
              <Button title="Valider ma commande" />
            </View>
          </View>
          {/* BUton  */}
        </View>
      </Container>
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
        }}>
        <View
          style={{
            height: '30%',
            borderTopLeftRadius: 50,
            // alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              top: 10,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Programmer une heure
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18}}>ASAP</Text>
            <Text style={{fontSize: 18}}>Des que possible</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 18}}>Aujourd'hui</Text>
            <Text style={{fontSize: 18}}>20:30 - 16:30</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 40,
            }}>
            <TouchableOpacity
              style={{}}
              onPress={() => setIsVisibleBottom(false)}>
              <Text style={{fontSize: 20, color: 'red'}}>Annuler</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontSize: 20, color: 'green'}}>Confirmer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Backdrop>
      {/* DEUXIEME BACKFROP */}
      <Backdrop
        visible={isVisiblePaiement}
        handleOpen={handleOpenPaiement}
        handleClose={handleClosePaiement}
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
        }}>
        <View
          style={{
            height: '25%',
            borderTopLeftRadius: 50,
            // alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              top: 10,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Choisir un moyent de paiement
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              alignItems: 'center',
            }}>
            <Icon onPress={() => {}} sizeIcon={25} icon={user} />
            <Text style={{fontSize: 20}}>Payer en espèces</Text>
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
              marginTop: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Icon onPress={() => {}} sizeIcon={25} icon={user} />
            <Text style={{fontSize: 20}}>Ajouter une nouvelle carte</Text>
          </View>
        </View>
      </Backdrop>
    </View>
  );
};

export default DetailsCommandeComponent;
