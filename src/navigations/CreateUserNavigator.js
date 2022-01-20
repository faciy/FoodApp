import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import CreateUser from '../screens/CreateUser';

const CreateUserNavigator = () => {
  const CreateUserStack = createStackNavigator();

  return (
    <CreateUserStack.Navigator
      initialRouteName="CreateUser"
      screenOptions={{
        headerShown: false,
        // gestureEnabled: true,
      }}>
      <CreateUserStack.Screen name="CreateUser" component={CreateUser} />
    </CreateUserStack.Navigator>
  );
};

export default CreateUserNavigator;
