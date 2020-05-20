import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../redux/context/AuthContext';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

const PERMISSIONS = ['public_profile', 'email'];
// import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function SignInScreen() {
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
  const _signOut = async () => {
    console.info('nhay vao day');
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={_signIn} />
      <Text>{username}</Text>
    </View>
  );
}
