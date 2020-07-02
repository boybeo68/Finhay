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
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: '100%',
    height: 45,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    width: '75%',
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: '40%',
    height: 50,
  },
  loginText: {
    color: '#fff',
    fontSize: 15,
  },
});
const PhoneScreen = ({navigation}) => {
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const onClickListener = (viewId) => {
    navigation.navigate('NameScreen');
  };
  return (
    <View style={styles.container}>
      <TitlePhone
        textHeader={'Số điện thoại & Email'}
        textContent={'Thông tin quan trọng này giúp bảo vệ bạn'}
      />
      <View style={{height: hp('50%')}}>
        <View style={styles.inputContainer}>
          <Text style={{fontWeight: '400', fontSize: 13}}>SĐT</Text>
          <TextInput
            value={phone}
            style={styles.inputs}
            placeholder="Bắt buộc"
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            onChangeText={(phoneNumber) => setPhone(phoneNumber)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{fontWeight: '400', fontSize: 13}}>Email</Text>

          <TextInput
            value={email}
            style={styles.inputs}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={(EmailUser) => setEmail(EmailUser)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            disabled={!phone}
            style={[styles.loginButton, {opacity: phone ? 1 : 0.5}]}
            onPress={() => onClickListener('login')}>
            <Text style={styles.loginText}>Tiếp tục</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default PhoneScreen;
