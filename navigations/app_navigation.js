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
import ActiveScreen from '../screen/ActiveScreen';
import GetCodeScreen from '../screen/GetCodeScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import {HeaderLeft} from '../screen/components/Header';
import {Icon} from 'native-base';
import {colors} from '../styles/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Stack = createStackNavigator();
const AuthNavigation = () => {
  const {state, authContext} = React.useContext(AuthContext);

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
              headerTitleAlign: 'center',
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
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Security"
            component={SecurityScreen}
            options={{
              headerTitle: (props) => <Indicator active={[true, true, true]} />,
              headerTitleAlign: 'center',
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
            name="Active"
            component={ActiveScreen}
            options={{
              headerTitle: null,
              headerLeft: null,
              headerRight: (props) => (
                <ButtonText
                  onPress={() => {
                    authContext.signOut();
                  }}
                  // onPress={authContext.signOut}
                  style={{marginRight: 20}}
                  title={'Đăng xuất'}
                />
              ),
            }}
          />
          <Stack.Screen
            name="GetCode"
            component={GetCodeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <Stack.Screen
          options={{
            headerTitle: null,
            headerLeft: (props) => <HeaderLeft />,
            headerRight: (params) => (
              <Icon
                name="notifications"
                style={{marginRight: 15, color: '#fff'}}
              />
            ),
            headerStyle: {backgroundColor: colors.primary, height: hp('12%')},
          }}
          name="Home"
          component={HomeScreen}
        />
      )}
    </Stack.Navigator>
  );
};
export default AuthNavigation;
