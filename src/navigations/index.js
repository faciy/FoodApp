import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {UserContext} from '../utils/context/AuthContext';
import {GlobalContext} from '../context/Provider';

export default function AppNavContainer() {
  // const [userInfo, setUserInfo] = React.useContext(UserContext);
  // console.log('userInfo', userInfo);
  const {
    authState: {isLoggedIn},
  } = React.useContext(GlobalContext);

  console.log('isLoggedIn', isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn === true ? <DrawerNavigator /> : <AuthNavigator />}
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}
