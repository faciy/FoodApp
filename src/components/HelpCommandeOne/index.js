import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import rightArrow from '../../../assets/images/rightArrow.png';
import styles from './styles';
import Icon from '../common/Icon';
import {List} from 'react-native-paper';

const HelpCommandeOneComponent = () => {
  const {navigate, goBack} = useNavigation();
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon onPress={() => goBack()} sizeIcon={15} icon={rightArrow} />
        <Text
          numberOfLines={1}
          style={{fontSize: 20, fontFamily: 'OpenSans-Bold'}}>
          Aide pour une commande
        </Text>
      </View>
      <View style={{padding: 20}}>
        <List.Accordion
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ffffff',
          }}
          title="Qualité ou état des produits"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ffffff',
          }}
          title="Problèmes de livraison"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ffffff',
          }}
          title="La commande avait des produits manquants ou incorrects"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ffffff',
          }}
          title="Problèmesliés au coursier"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ffffff',
          }}
          title="Problèmes liés au paiement ou à l'utilisation de codes promo"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </View>
    </View>
  );
};

export default HelpCommandeOneComponent;
