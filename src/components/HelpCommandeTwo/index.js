import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import rightArrow from '../../../assets/images/rightArrow.png';
import styles from './styles';
import Icon from '../common/Icon';
import {List} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

const HelpCommandeTwoComponent = () => {
  const {navigate, goBack} = useNavigation();
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon onPress={() => goBack()} sizeIcon={15} icon={rightArrow} />
        <Text numberOfLines={1} style={{fontSize: 20}}>
          Non lié à une commande
        </Text>
      </View>
      <ScrollView>
        <View style={{padding: 20}}>
          <List.Accordion
            style={{
              backgroundColor: 'white',
              marginTop: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#ffffff',
            }}
            title="Glovo Prime"
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
            title="Information de compte"
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
            title="Verifier mon identité"
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
            title="Newsletter Glovo"
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
            title="Information concernant la livraison: zones de livraison, horaires et moyen de paiement"
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
            title="Travailler avec nous"
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
            title="Politiques"
            left={props => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </View>
      </ScrollView>
    </View>
  );
};

export default HelpCommandeTwoComponent;
