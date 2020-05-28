import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import Loading from './screens/Loading';
import AuthNavigation from './navigation/AuthNavigation';

import {AuthContext} from './context';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return{
      siginIn: () => {
        setIsLoading(false);
        setUserToken("1234");
      },
      siginUp: () => {
        setIsLoading(false);
        setUserToken("1234");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  if (isLoading)
    return <Loading />;
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          {userToken ? (
            <DrawerNavigation/>
          ) : (
            <AuthNavigation/>
          )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

