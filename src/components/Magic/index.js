import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import user from '../../../assets/images/user.png';
import Icon from '../common/Icon';

import styles from './styles';

const MagicComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={user}
            style={{width: 20, height: 20, tintColor: 'white'}}
          />
          <Text style={{color: 'white', fontSize: 20, left: 20}}>Magique</Text>
        </View>
        <Icon onPress={() => {}} sizeIcon={25} icon={user} />
      </View>

      {/* BODY  */}
      <View>
        <View
          style={{
            backgroundColor: '#dfe4ea',
            width: '100%',
            height: 150,
            padding: 20,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Expliquer en detail ce dont vous avez besoin
          </Text>
          <Text>
            On vous livre ce que vous voulez. Soyez aussi précis que possible et
            ajouter une photo si vous en avez une!
          </Text>
        </View>
      </View>
      {/* TEXTAREA  */}
      <View
        style={{
          backgroundColor: '#ffffff',
          // borderWidth: 1,
          padding: 20,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <TextInput
          style={{height: '60%', justifyContent: 'flex-start'}}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
      </View>
      {/* BUTTON  */}
      <TouchableOpacity
        style={{
          backgroundColor: '#dfe4ea',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          height: 50,
          borderRadius: 50,
          // bottom: 25,
          marginTop: 20,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
          Suivant
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MagicComponent;
