import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import CurrentPosition from '../screens/CurrentPosition';
import Profil from '../screens/Profil';
import AdresseMap from '../screens/AdresseMap';
import Home from '../screens/Home';
import MesCommandes from '../screens/MesCommandes';
import InformationProfil from '../screens/InformationProfil';
import CodePromo from '../screens/CodePromo';
import Help from '../screens/Help';
import DetailsRestaurant from '../screens/DetailsRestaurant';
import DetailsAliment from '../screens/DetailsAliment';
import AddCart from '../screens/AddCart';
import DetailsCommande from '../screens/DetailsCommande';
import AddCodePromo from '../screens/AddCodePromo';
import InfoCommande from '../screens/InfoCommande';
import HelpCommandeOne from '../screens/HelpCommandeOne';
import HelpCommandeTwo from '../screens/HelpCommandeTwo';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      initialRouteName="CurrentPosition"
      screenOptions={{
        headerShown: false,
        // gestureEnabled: true,
      }}>
      <HomeStack.Screen name="CurrentPosition" component={CurrentPosition} />
      <HomeStack.Screen name="Profil" component={Profil} />
      <HomeStack.Screen name="AdresseMap" component={AdresseMap} />
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="MesCommandes" component={MesCommandes} />
      <HomeStack.Screen
        name="InformationProfil"
        component={InformationProfil}
      />
      <HomeStack.Screen name="CodePromo" component={CodePromo} />
      <HomeStack.Screen name="Help" component={Help} />
      <HomeStack.Screen
        name="DetailsRestaurant"
        component={DetailsRestaurant}
      />
      <HomeStack.Screen name="DetailsAliment" component={DetailsAliment} />
      <HomeStack.Screen name="AddCart" component={AddCart} />
      <HomeStack.Screen name="DetailsCommande" component={DetailsCommande} />
      <HomeStack.Screen name="AddCodePromo" component={AddCodePromo} />
      <HomeStack.Screen name="InfoCommande" component={InfoCommande} />
      <HomeStack.Screen name="HelpCommandeOne" component={HelpCommandeOne} />
      <HomeStack.Screen name="HelpCommandeTwo" component={HelpCommandeTwo} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
