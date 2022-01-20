import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {UserContext} from '../utils/context/AuthContext';

export default function AppNavContainer() {
  const [userInfo, setUserInfo] = React.useContext(UserContext);
  console.log('userInfo', userInfo);

  return (
    <NavigationContainer>
      {userInfo === true ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
