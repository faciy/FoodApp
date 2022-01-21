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
import SearchLocation from '../screens/SearchLocation';
import PromoReview from '../screens/PromoReview';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      initialRouteName="CurrentPosition"
      screenOptions={{
        headerShown: false,
        // gestureEnabled: true,
      }}>
      <HomeStack.Screen
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        name="CurrentPosition"
        component={CurrentPosition}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Profil"
        component={Profil}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="AdresseMap"
        component={AdresseMap}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="MesCommandes"
        component={MesCommandes}
      />
      <HomeStack.Screen
        name="InformationProfil"
        component={InformationProfil}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="CodePromo"
        component={CodePromo}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Help"
        component={Help}
      />
      <HomeStack.Screen
        name="DetailsRestaurant"
        component={DetailsRestaurant}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="DetailsAliment"
        component={DetailsAliment}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="AddCart"
        component={AddCart}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="DetailsCommande"
        component={DetailsCommande}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="AddCodePromo"
        component={AddCodePromo}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="InfoCommande"
        component={InfoCommande}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="HelpCommandeOne"
        component={HelpCommandeOne}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="HelpCommandeTwo"
        component={HelpCommandeTwo}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="DejSnack"
        component={DejSnack}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Hungry"
        component={Hungry}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Supermarket"
        component={Supermarket}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Shops"
        component={Shops}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Magic"
        component={Magic}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ChangePassword"
        component={ChangePassword}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ChangeNumber"
        component={ChangeNumber}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="ModePayment"
        component={ModePayment}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="Gift"
        component={Gift}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="SearchLocation"
        component={SearchLocation}
      />
      <HomeStack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        name="PromoReview"
        component={PromoReview}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
