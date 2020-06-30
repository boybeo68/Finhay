import React from 'react';
import {Text, View, StyleSheet, Image, StatusBar} from 'react-native';
import {Icon} from 'native-base';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../styles/colors';
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
    justifyContent: 'space-between',
  },
  next: {
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginLeft: 100,
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
    marginTop: 50,
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
      <TouchableOpacity>
        <Text style={{color: colors.grayText}}>Bỏ qua </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Intro3');
        }}
        style={styles.next}>
        <Text style={{color: '#fff', fontSize: 20}}> Tiếp theo </Text>
        <Icon type={'AntDesign'} name={'arrowright'} style={{color: '#fff'}} />
      </TouchableOpacity>
    </View>
  </View>
);

export default IntroSecond;