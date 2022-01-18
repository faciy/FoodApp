import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '../common/Icon';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import rightArrow from '../../../assets/images/rightArrow.png';
import user from '../../../assets/images/user.png';
import {TextInput} from 'react-native-gesture-handler';

const AddCodePromoComponent = () => {
  const {navigate, goBack} = useNavigation();
  const [addCodePromo, setAddCodePromo] = useState('');
  console.log('addCodePromo', addCodePromo.length);

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon onPress={() => {}} sizeIcon={15} icon={rightArrow} />
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>Codes promo</Text>
        </View>
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Icon onPress={() => {}} sizeIcon={15} icon={user} />
            <TextInput
              onChangeText={text => setAddCodePromo(text)}
              placeholder="Ajouter un code promo"
            />
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 1,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: addCodePromo.length > 0 ? 'green' : 'white',
          borderTopColor: 'grey',
          borderTopWidth: 0.3,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: addCodePromo.length > 0 ? 'white' : 'black',
          }}>
          Appliquer
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCodePromoComponent;
