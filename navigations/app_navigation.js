import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../screen/SplashScreen';
import {SignInScreen} from '../screen/SignInScreen';
import HomeScreen from '../screen/HomeScreen';
import {AuthContext} from '../redux/context/AuthContext';
import * as React from 'react';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  const {state} = React.useContext(AuthContext);

  return (
    <Stack.Navigator headerMode="none">
      {state.isLoading ? (
        // We haven't finished checking for the token yet
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : state.userToken == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerTitle: null,
            // title: 'Sign in',
            animationTypeForReplace: state.isSignout ? 'pop' : 'push',
          }}
        />
      ) : (
        <Stack.Screen
          name="Home"
          options={{header: null}}
          component={HomeScreen}
        />
      )}
    </Stack.Navigator>
  );
};
export default AuthNavigation;
