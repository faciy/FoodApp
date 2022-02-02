import React, {createContext, useReducer} from 'react';
import authInitialState from './initialsStates/authInitialState';
import auth from './reducers/auth';

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [authState, authDispacth] = useReducer(auth, authInitialState);

  return (
    <GlobalContext.Provider value={{authState, authDispacth}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
