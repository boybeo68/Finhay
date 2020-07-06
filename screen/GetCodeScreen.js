import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../styles/colors';
import {TextInput} from 'react-native-gesture-handler';
import {nexScreen} from '../global/global';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  body: {
    height: hp('45%'),
    marginTop: 20,
    alignItems: 'center',
  },
  textHeader: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'left',
  },
  textContent: {
    color: colors.grayText,
    fontSize: 15,
  },
  image: {
    width: 150,
    height: 150,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    borderRadius: 10,
    padding: 5,
    width: '75%',
    borderWidth: 1,
    borderColor: colors.grayText,
  },
});
const GetCodeScreen = ({navigation}) => {
  const [phone, setPhone] = React.useState();
  return (
    <View style={styles.container}>
      <View style={{height: hp('10%')}} />
      <View style={styles.body}>
        <Image
          resizeMode={'cover'}
          style={styles.image}
          source={{
            uri:
              'https://finhay.com.vn/wp-content/themes/finhayfaq/extra/images/icon_uudiem.png',
          }}
        />
        <View style={{flex: 1, width: '100%', marginTop: hp('5%')}}>
          <Text style={styles.textHeader}>Số điện thoại</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={phone}
              style={styles.inputs}
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              onChangeText={(phoneNumber) => setPhone(phoneNumber)}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text
          style={{color: colors.grayText, marginVertical: 20, fontSize: 13}}>
          Nếu không nhận được mã kích hoạt bạn có thể bỏ qua bước này để tiếp
          tục sử dụng app. {'\n'}Bạn vẫn có thể xác thực lại số điện thoại bất
          cứ lúc nào
        </Text>

        <TouchableOpacity
          onPress={() => {
            nexScreen(navigation, 'Welcome');
          }}
          style={{
            width: wp('80%'),
            height: 40,
            borderRadius: 40,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', color: '#fff'}}>
            Lấy mã xác thực
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nexScreen(navigation, 'Welcome');
          }}
          style={{
            width: wp('60%'),
            height: 50,
            borderRadius: 20,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: 'blue'}}>Tôi đã có mã</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetCodeScreen;
