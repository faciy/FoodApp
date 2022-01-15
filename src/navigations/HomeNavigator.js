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
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
