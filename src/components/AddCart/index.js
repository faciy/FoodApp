import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
import Button from '../common/Button';
import food from '../../../assets/images/food.jpg';

const AddCartComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={food} style={{flex: 3, width: '100%'}} />
      </View>
      <View style={styles.footer}>
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 20,
            marginTop: 40,
            // flexDirection: 'column',
            // justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Crêpe Au Sucre</Text>
          <Text style={{fontSize: 20}}>2,000 XOF</Text>
          <Text style={{textAlign: 'center', fontSize: 16}}>
            Couche fine de pâte, faite à base de farine et d'oeufs agglomérés à
            du sucre
          </Text>
          <Button title="Ajouter pour 2,000 XOF" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default AddCartComponent;
