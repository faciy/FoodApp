import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import CreateUser from '../screens/CreateUser';
import Login from '../screens/Login';
import ForgetPassword from '../screens/ForgetPassword';
import Register from '../screens/Register';
import CodeVerification from '../screens/CodeVerification';

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
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="CodeVerification" component={CodeVerification} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
