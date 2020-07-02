import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import TitlePhone from './components/TitlePhone';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../styles/colors';
import {CheckBox} from 'native-base';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
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
    backgroundColor: '#fff',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: '100%',
    height: 45,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  inputs: {
    height: 45,
    width: '65%',
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
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
    marginTop: 20,
    width: '100%',
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: '70%',
    height: 50,
  },
  loginText: {
    color: '#fff',
    fontSize: 15,
  },
});
const SecurityScreen = ({navigation}) => {
  const [policy, setPolicy] = useState(true);
  const [comit, setComit] = useState(false);
  const [password, setPassword] = useState();
  const onClickListener = (viewId) => {
    navigation.navigate('Phone');
  };
  const renderPolicy = (params) => {};

  return (
    <View style={styles.container}>
      <TitlePhone textHeader={'Bảo mật'} textContent={'Hãy chú ý và ghi nhớ'} />
      <View style={{height: hp('50%')}}>
        <View style={styles.inputContainer}>
          <Text style={{fontWeight: '400', fontSize: 13}}>Mật khẩu</Text>
          <TextInput
            value={password}
            style={styles.inputs}
            placeholder="Ít nhất 8 kí tự"
            keyboardType="default"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(pass) => setPassword(pass)}
          />
        </View>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <CheckBox
            color={colors.primary}
            checked={policy}
            onPress={() => {
              setPolicy(!policy);
            }}
          />
          <Text style={{marginLeft: 20}}>
            Tôi đồng ý với điều khoản sử dụng của Finhay
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            color={colors.primary}
            checked={comit}
            onPress={() => {
              setComit(!comit);
            }}
          />
          <Text style={{marginLeft: 20}}>Tôi cam kết đã trên 18 tuổi</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            disabled={!password}
            style={[
              styles.loginButton,
              {opacity: password && comit && policy ? 1 : 0.5},
            ]}
            onPress={() => onClickListener('login')}>
            <Text style={styles.loginText}>Hoàn thành đăng ký</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default SecurityScreen;
