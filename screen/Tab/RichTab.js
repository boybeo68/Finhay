import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../styles/colors';
import {Shadow} from '../../styles/main_style';
import {Icon} from 'native-base';
import HelpMain from './Components.js/HelpMain';
import {ScrollView} from 'react-native-gesture-handler';
import GuideMain from './Components.js/Guide';
const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: 1300,
    // backgroundColor: '#fff',
    alignItems: 'center',
  },
  cardMain: {
    padding: 10,
    width: wp('90%'),
    height: hp('25%'),
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    ...Shadow,
  },
});

const RichTab = ({params}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardMain}>
        <View
          style={{
            height: '40%',
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            borderBottomWidth: 0.4,
            borderBottomColor: colors.grayText,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              style={{color: colors.primary}}
              type="FontAwesome5"
              name="piggy-bank"
            />
            <Text style={{marginHorizontal: 10, fontWeight: 'bold'}}>
              Đầu tư{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 22}}>0đ</Text>
            <Icon
              type="Entypo"
              name="chevron-right"
              style={{color: colors.grayText, opacity: 0.5}}
            />
          </View>
        </View>
        <View
          style={{
            height: '40%',
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              style={{color: colors.primary}}
              type="FontAwesome5"
              name="money-bill-alt"
            />
            <Text style={{marginHorizontal: 10, fontWeight: 'bold'}}>
              Tiết kiệm{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'red'}}>
              1.000.000đ
            </Text>
            <Icon
              type="Entypo"
              name="chevron-right"
              style={{color: colors.grayText, opacity: 0.5}}
            />
          </View>
        </View>
        <View
          style={{
            height: '20%',
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginHorizontal: 10,
                fontWeight: '400',
                color: colors.grayText,
              }}>
              Gửi tiết kiệm không kỳ hạn lãi suất lên đến 6.0%/năm{' '}
            </Text>
          </View>
        </View>
      </View>
      <HelpMain />
      <GuideMain />
    </ScrollView>
  );
};

export default RichTab;
