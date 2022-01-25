import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InfoCommandeComponent from '../../components/InfoCommande';

const InfoCommande = ({route}) => {
  console.log('route', route);
  return (
    <InfoCommandeComponent
      image={route.params.item.img}
      statut={route.params.item.statut}
      nameRest={route.params.item.nameRest}
      commande={route.params.item.commande}
    />
  );
};

export default InfoCommande;
