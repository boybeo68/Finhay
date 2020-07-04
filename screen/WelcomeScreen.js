import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../styles/colors';
import {nexScreen} from '../global/global';
import {AuthContext} from '../redux/context/AuthContext';
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
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  textContent: {
    color: colors.grayText,
    fontSize: 15,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const WelcomeScreen = ({navigation}) => {
  const {authContext} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={{height: hp('10%')}} />
      <View style={styles.body}>
        <Image
          resizeMode={'cover'}
          style={styles.image}
          source={{
            uri:
              'https://salt.topdev.vn/tPZA7_Woi-fDUtGILmF_lgJeJxjdBanVFWmfFpwkxJs/fit/192/0/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ZpbGVzL2xvZ29zL1c3TG5PcTV0SUNxYlBpOGVpNlNBLnBuZw/w7lnoq5ticqbpi8ei6sa.png',
          }}
        />
        <Text style={styles.textHeader}>Chào mừng đến Finhay</Text>
        <Text style={styles.textContent}>
          Những tích luỹ nhỏ lẻ trở thành thói quen tốt khi bạn nhận thấy sự
          tiến bộ
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => authContext.signIn()}
          style={{
            width: wp('80%'),
            height: 40,
            borderRadius: 40,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', color: '#fff'}}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
