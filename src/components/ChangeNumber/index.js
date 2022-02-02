import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from '../common/Icon';
import leftArrow from '../../../assets/images/leftArrow.png';
import {useNavigation} from '@react-navigation/native';

const ChangeNumberComponent = () => {
  const {navigate, goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Icon onPress={() => goBack()} sizeIcon={15} icon={leftArrow} />
          <Text
            style={{fontSize: 20, fontFamily: 'OpenSans-Bold', color: 'black'}}>
            Numéro de téléphone
          </Text>
        </View>

        {/* INPUT  */}
        <View style={{padding: 20}}>
          <Text
            style={{fontSize: 18, fontFamily: 'OpenSans-Bold', color: 'black'}}>
            NUMERO DE TELEPHONE
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text> drapeau +225 </Text>
            <TextInput placeholder="Numéro de téléphone" />
          </View>
          <View style={{backgroundColor: 'grey', width: '100%', height: 1.5}} />
          <Text
            style={{
              marginTop: 20,
              fontFamily: 'OpenSans-Light',
              color: 'black',
            }}>
            Vous allez recevoir par sms un code pour vérifer votre numéro de
            téléphone
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          height: 60,
          justifyContent: 'center',
          borderTopColor: 'grey',
          borderTopWidth: 0.5,
        }}>
        <Text
          style={{color: 'green', fontSize: 20, fontFamily: 'OpenSans-Bold'}}>
          Terminé
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeNumberComponent;
