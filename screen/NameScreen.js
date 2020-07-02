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
    width: '40%',
    height: 50,
  },
  loginText: {
    color: '#fff',
    fontSize: 15,
  },
});
const NameScreen = ({navigation}) => {
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const onClickListener = (viewId) => {
    navigation.navigate('Security');
  };
  return (
    <View style={styles.container}>
      <TitlePhone
        textHeader={'Tên của bạn là gì?'}
        textContent={'Hãy đảm bảo sự chính xác về bạn'}
      />
      <View style={{height: hp('50%')}}>
        <View style={styles.inputContainer}>
          <Text style={{fontWeight: '400', fontSize: 13}}>Họ</Text>
          <TextInput
            value={phone}
            style={styles.inputs}
            placeholder="Ví dụ: Nguyễn, Trần, Lê"
            keyboardType="default"
            underlineColorAndroid="transparent"
            onChangeText={(phoneNumber) => setPhone(phoneNumber)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{fontWeight: '400', fontSize: 13}}>Tên đệm & tên </Text>

          <TextInput
            value={email}
            style={styles.inputs}
            placeholder="Ví dụ: Thu Hà, Quang Dũng"
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

export default NameScreen;
