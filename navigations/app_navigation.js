import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../screen/SplashScreen';
import {SignInScreen} from '../screen/SignInScreen';
import HomeScreen from '../screen/HomeScreen';
import {AuthContext} from '../redux/context/AuthContext';
import React, {useState, useEffect} from 'react';
import IntroFirst from '../screen/GuideScreen/Intro1';
import IntroSecond from '../screen/GuideScreen/Intro2';
import IntroThree from '../screen/GuideScreen/Intro3';
import AsyncStorage from '@react-native-community/async-storage';
import ButtonText from '../screen/components/ButtonText';
import {HeaderBackButton} from '@react-navigation/stack';
import PhoneScreen from '../screen/PhoneScreen';
import Indicator from '../screen/components/Indicator';
import NameScreen from '../screen/NameScreen';
import SecurityScreen from '../screen/SecurityScreen';

const Stack = createStackNavigator();
const Guide = createStackNavigator();
const AuthNavigation = () => {
  const {state} = React.useContext(AuthContext);
  const [guide, setGuide] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key');
        if (value !== null) {
          setGuide(value);
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);

  return (
    <Stack.Navigator>
      {state.isLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : state.userToken == null ? (
        <>
          {!guide && (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                name="Intro1"
                component={IntroFirst}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Intro2"
                component={IntroSecond}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Intro3"
                component={IntroThree}
              />
            </>
          )}
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              headerTitle: false,
              headerLeft: (props) => (
                <HeaderBackButton
                  {...props}
                  labelVisible={false}
                  tintColor={'black'}
                />
              ),
              headerRight: () => (
                <ButtonText
                  style={{marginRight: 15}}
                  color={'black'}
                  onPress={() => {
                    alert('test');
                  }}
                  size={14}
                  title={'Tìm mật khẩu'}
                />
              ),
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
          <Stack.Screen
            name="Phone"
            component={PhoneScreen}
            options={{
              headerTitle: (props) => (
                <Indicator active={[true, false, false]} />
              ),
              headerLeft: (props) => (
                <HeaderBackButton
                  {...props}
                  labelVisible={false}
                  tintColor={'black'}
                />
              ),
            }}
          />
          <Stack.Screen
            name="NameScreen"
            component={NameScreen}
            options={{
              headerTitle: (props) => (
                <Indicator active={[true, true, false]} />
              ),
              headerLeft: (props) => (
                <HeaderBackButton
                  {...props}
                  labelVisible={false}
                  tintColor={'black'}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Security"
            component={SecurityScreen}
            options={{
              headerTitle: (props) => <Indicator active={[true, true, true]} />,
              headerLeft: (props) => (
                <HeaderBackButton
                  {...props}
                  labelVisible={false}
                  tintColor={'black'}
                />
              ),
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
