import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';

export default function AppNavContainer() {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
