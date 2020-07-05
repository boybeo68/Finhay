/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {AuthContext} from '../redux/context/AuthContext';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../styles/colors';

const PERMISSIONS = ['public_profile', 'email'];
// import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonLogin: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.grayText,
    width: wp('40%'),
    height: 50,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: colors.primary,
  },
  loginText: {
    color: '#fff',
    fontSize: 14,
  },
});
const logo_f =
  'https://toppng.com/uploads/preview/facebook-icon-social-media-icon-png-and-vector-facebook-icon-11562876940l4hbwapl7m.png';
const logo_g =
  'https://i0.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1';

const ButtonLogin = ({
  textSize,
  textColor,
  title,
  url,
  onPress,
  sizeIcon,
  ...props
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      props.style,
    ]}>
    <Image
      style={{width: sizeIcon, height: sizeIcon, marginRight: 5}}
      resizeMode={'contain'}
      source={{uri: url}}
    />
    <Text style={{color: textColor, fontSize: textSize}}>{title}</Text>
  </TouchableOpacity>
);

export default ButtonLogin;

export function SignInScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      navigation.navigate('Phone', {dataLogin: userInfo.user.email});
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
          navigation.navigate('Phone', {dataLogin: data});
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
  const onClickListener = (viewId) => {
    navigation.navigate('Phone');
  };
  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}} />
      <Text style={{fontWeight: 'bold', fontSize: 18}}>Đăng nhập bằng</Text>
      <View
        style={{
          flexDirection: 'row',
          height: hp('10%'),
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <ButtonLogin
          style={styles.buttonLogin}
          title="Google"
          url={logo_g}
          onPress={_signIn}
          sizeIcon={30}
        />
        <ButtonLogin
          style={styles.buttonLogin}
          title="Facebook"
          url={logo_f}
          sizeIcon={30}
          onPress={loginFacebook}
        />
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>Hoặc</Text>
      <View style={{height: hp('50%')}}>
        <View style={styles.inputContainer}>
          <Text style={{fontWeight: '400', fontSize: 13}}>Tài khoản</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Email hoặc SĐT"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{fontWeight: '400', fontSize: 13}}>Mật khẩu</Text>

          <TextInput
            style={styles.inputs}
            placeholder="*******"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => onClickListener('login')}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableHighlight>
      </View>

      <Text>{username}</Text>
    </View>
  );
}
