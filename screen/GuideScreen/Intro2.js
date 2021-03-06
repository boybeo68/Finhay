import React from 'react';
import {Text, View, StyleSheet, Image, StatusBar} from 'react-native';
import {Icon} from 'native-base';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../styles/colors';
import AsyncStorage from '@react-native-community/async-storage';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    // paddingTop: heightPercentageToDP('4%'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 30,
    color: '#57595A',
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
  },
  textSub: {
    fontSize: 20,
    color: colors.grayText,
    textAlign: 'center',
  },
  image: {
    width: widthPercentageToDP('70%'),
    height: heightPercentageToDP('25%'),
    margin: 20,
  },
  nextContainer: {
    flexDirection: 'row',
    marginBottom: 80,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  next: {
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginLeft: 70,
    backgroundColor: '#3EB748',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    backgroundColor: colors.grayText,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  lineActive: {
    backgroundColor: '#3EB748',
    width: 20,
    height: 10,
    borderRadius: 5,
  },
  rowLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    // backgroundColor: 'red',
  },
});

const IntroSecond = ({navigation}) => (
  <View style={styles.container}>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
    <Image
      resizeMode={'cover'}
      style={styles.image}
      source={require('./intro-2.png')}
    />
    <Text numberOfLines={2} style={styles.textTitle}>
      Tích luỹ thông minh bắt đầu từ 50.000
    </Text>
    <Text style={styles.textSub} numberOfLines={3}>
      Huấn luyện viên giúp bạn tạo dựng thói quen tiết kiệm nhỏ, đều đặt trong
      dài hạn để mang lại lợi ích tài chính
    </Text>
    <View style={styles.rowLine}>
      <View style={styles.line} />
      <View style={styles.lineActive} />
      <View style={styles.line} />
    </View>
    <View style={styles.nextContainer}>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.setItem('@storage_Key', 'next');
          navigation.navigate('SignIn');
        }}>
        <Text style={{color: colors.grayText}}>Bỏ qua </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Intro3');
        }}
        style={styles.next}>
        <Text style={{color: '#fff', fontSize: 17}}> Tiếp theo </Text>
        <Icon
          type={'AntDesign'}
          name={'arrowright'}
          style={{color: '#fff', fontSize: 18}}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default IntroSecond;
