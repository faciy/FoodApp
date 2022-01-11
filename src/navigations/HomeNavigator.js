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
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
