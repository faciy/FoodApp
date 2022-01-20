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
import DejSnack from '../screens/DejSnack';
import Hungry from '../screens/Hungry';
import Supermarket from '../screens/Supermarket';
import Shops from '../screens/Shops';
import Magic from '../screens/Magic';
import ChangePassword from '../screens/ChangePassword';
import ChangeNumber from '../screens/ChangeNumber';
import ModePayment from '../screens/ModePayment';
import Gift from '../screens/Gift';

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
      <HomeStack.Screen name="DejSnack" component={DejSnack} />
      <HomeStack.Screen name="Hungry" component={Hungry} />
      <HomeStack.Screen name="Supermarket" component={Supermarket} />
      <HomeStack.Screen name="Shops" component={Shops} />
      <HomeStack.Screen name="Magic" component={Magic} />
      <HomeStack.Screen name="ChangePassword" component={ChangePassword} />
      <HomeStack.Screen name="ChangeNumber" component={ChangeNumber} />
      <HomeStack.Screen name="ModePayment" component={ModePayment} />
      <HomeStack.Screen name="Gift" component={Gift} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
