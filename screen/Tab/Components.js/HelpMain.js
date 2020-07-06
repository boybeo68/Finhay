import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {rowCenter} from '../../../styles/main_style';
import {Icon} from 'native-base';
import {colors} from '../../../styles/colors';
const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP('65%'),
    width: '100%',
    padding: 20,
    marginTop: heightPercentageToDP('1%'),
    // backgroundColor: 'red',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grayText,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
});
const listHelp = [
  {title: 'Xem giới thiệu Finhay', link: '', id: 1},
  {title: 'Xem hướng dẫn nạp tiền ', link: '', id: 2},
  {title: 'Tiền của tôi sẽ đi đâu', link: '', id: 3},
  {title: 'Nhập mã giới thiệu từ bạn bè ', link: '', id: 4},
  {title: 'Nạp tiền lần đầu ', link: '', id: 5},
  {title: 'Cơ hội nhận 100k/ngày', link: '', id: 6},
];
const HelpMain = ({params}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Icon type="FontAwesome5" name="rocket" />
        <Text style={{fontWeight: 'bold', marginLeft: 5, fontSize: 20}}>
          Gợi ý cách bắt đầu{' '}
        </Text>
      </View>
      <View
        style={{
          paddingTop: 10,
          marginTop: 10,
          backgroundColor: '#fff',
          paddingHorizontal: 12,
        }}>
        {listHelp.map((item, index) => {
          return <ItemRow item={item} key={item.id + item.title} />;
        })}
      </View>
    </View>
  );
};

export default HelpMain;
const ItemRow = ({item}) => (
  <TouchableOpacity style={styles.button}>
    <View style={{...rowCenter}}>
      <Icon
        type="FontAwesome"
        style={{
          fontSize: 20,
          color: colors.grayText,
          opacity: 0.5,
          marginRight: 5,
        }}
        name="circle-thin"
      />
      <Text style={{fontSize: 16}}>{item.title}</Text>
    </View>
    <Icon
      type="Entypo"
      name="chevron-right"
      style={{color: colors.grayText, opacity: 0.5}}
    />
  </TouchableOpacity>
);
