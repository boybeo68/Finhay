import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../styles/colors';
import {nexScreen} from '../global/global';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  body: {
    height: hp('60%'),
    marginTop: 20,
    alignItems: 'center',
  },
  textHeader: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 20,
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
});
const ActiveScreen = ({navigation}) => {
  const onClickListener = (viewId) => {
    navigation.navigate('GetCode');
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          resizeMode={'cover'}
          style={styles.image}
          source={{
            uri:
              'https://finhay.com.vn/wp-content/themes/finhayfaq/extra/images/icon_uudiem.png',
          }}
        />
        <Text style={styles.textHeader}>Kích hoạt để bắt đầu</Text>
        <Text style={styles.textContent}>
          Kích hoạt số điện thoại của bạn để sử dụng
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            nexScreen(navigation, 'GetCode');
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
            Kích hoạt ngay
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nexScreen(navigation, 'GetCode');
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
          <Text style={{fontWeight: 'bold', color: colors.primary}}>
            Chuyển sang kích hoạt bằng email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nexScreen(navigation, 'GetCode');
          }}
          style={{
            width: wp('60%'),
            height: 30,
            borderRadius: 20,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', color: colors.grayText}}>
            Bỏ qua
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActiveScreen;
