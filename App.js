import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {PermissionsAndroid} from 'react-native';
import AppNavContainer from './src/navigations';
import {UserContext} from './src/utils/context/AuthContext';

const App = () => {
  const [userInfo, setUserInfo] = React.useState(false);

  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <AppNavContainer />
    </UserContext.Provider>
  );
};

export default App;
