import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../screen/SplashScreen';
import {SignInScreen} from '../screen/SignInScreen';
import HomeScreen from '../screen/HomeScreen';
import {AuthContext} from '../redux/context/AuthContext';
import * as React from 'react';
import IntroFirst from '../screen/GuideScreen/Intro1';
import IntroSecond from '../screen/GuideScreen/Intro2';
import IntroThree from '../screen/GuideScreen/Intro3';

const Stack = createStackNavigator();
const Guide = createStackNavigator();
const AuthNavigation = () => {
  const {state} = React.useContext(AuthContext);

  return (
    <Stack.Navigator headerMode="none">
      {state.isLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : state.userToken == null ? (
        <>
          <Guide.Screen name="Intro1" component={IntroFirst} />
          <Guide.Screen name="Intro2" component={IntroSecond} />
          <Guide.Screen name="Intro3" component={IntroThree} />

          <Guide.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        </>
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
};
export default AuthNavigation;
