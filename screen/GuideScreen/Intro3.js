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
    paddingTop: heightPercentageToDP('15%'),
  },
  textTitle: {
    fontSize: 30,
    color: '#57595A',
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  textSub: {
    fontSize: 20,
    color: colors.grayText,
    textAlign: 'center',
  },
  image: {
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('30%'),
    margin: 30,
  },
  nextContainer: {
    flexDirection: 'row',
    margin: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: 'orange',
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
    marginTop: 50,
  },
});

const IntroThree = ({navigation}) => (
  <View style={styles.container}>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
    <Image
      resizeMode={'cover'}
      style={styles.image}
      source={require('./image-3.png')}
    />
    <Text numberOfLines={2} style={styles.textTitle}>
      Cập nhật mọi lúc mọi nơi
    </Text>
    <Text style={styles.textSub} numberOfLines={3}>
      Dễ dàng theo dõi 24/7 thành quả theo đuổi mục tiêu tài chính của chính bản
      thân mình
    </Text>
    <View style={styles.rowLine}>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.lineActive} />
    </View>
    <View style={styles.nextContainer}>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.setItem('@storage_Key', 'next');
          navigation.navigate('SignIn');
        }}
        style={styles.next}>
        <Text style={{color: '#fff', fontSize: 20}}> Bắt đầu </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default IntroThree;
