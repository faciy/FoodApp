import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import CreateUser from '../screens/CreateUser';
import Login from '../screens/Login';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName="CreateUser"
      screenOptions={{
        headerShown: false,
        // gestureEnabled: true,
      }}>
      <AuthStack.Screen name="CreateUser" component={CreateUser} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
