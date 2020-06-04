import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../redux/context/AuthContext';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk';

const PERMISSIONS = ['public_profile', 'email'];
// import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function SignInScreen({navigation}) {
  const [username, setUsername] = useState('');

  const {authContext} = useContext(AuthContext);

  const _configureGoogleSignIn = async () => {
    GoogleSignin.configure({
      webClientId:
        '879227249390-2rremedhe8r9k2ordjelm6knrvs7ej91.apps.googleusercontent.com',
      iosClientId:
        '879227249390-e6qn43dqcq2npthd7kbbskg15oq5c87l.apps.googleusercontent.com',
      offlineAccess: false,
    });
  };
  const _signIn = async () => {
    try {
      await _configureGoogleSignIn();
      const isSignedIn = await GoogleSignin.isSignedIn();

      if (isSignedIn) {
        await _signOut();
      }
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      navigation.navigate('Home');
      setUsername(userInfo.user.email);
      console.info(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('play services not available or outdated');
      } else {
        console.log(error);
      }
    }
  };
  const loginFacebook = async () => {
    const currentAccessToken = await AccessToken.getCurrentAccessToken();
    if (currentAccessToken) {
      console.info('cureen token', currentAccessToken);
    }
    try {
      let result = await LoginManager.logInWithPermissions(PERMISSIONS);
      if (result.isCancelled) {
      } else {
        AccessToken.getCurrentAccessToken().then((data) => {
          navigation.navigate('Home');
          console.info(data);
        });
      }
    } catch (error) {
      alert('Login failed with error: ' + error);
    }
  };
  const _signOut = async () => {
    console.info('nhay vao day');
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Button title="Sign in Google" onPress={_signIn} />
      <View style={{height: 30}} />
      <Button title="Sign in Facebook" onPress={loginFacebook} />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Intro1');
        }}
      />
      <Text>{username}</Text>
    </View>
  );
}
