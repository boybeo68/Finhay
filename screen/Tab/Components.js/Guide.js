import React from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {rowCenter, Shadow} from '../../../styles/main_style';
import {Icon} from 'native-base';
import {colors} from '../../../styles/colors';
const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP('40%'),
    width: '100%',
    padding: 20,
    marginTop: heightPercentageToDP('8%'),
    // backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('28%'),
    marginHorizontal: 5,
    ...Shadow,
  },
});
const listHelp = [
  {title: 'Hướng dẫn người mới', link: '', id: 1},
  {title: 'Nạp tiền', link: '', id: 2},
  {title: 'Rút tiền', link: '', id: 3},
  {title: 'Câu hỏi nổi bật', link: '', id: 4},
  {title: 'Tài khoản', link: '', id: 5},
  {title: 'Hướng dẫn sản phẩm', link: '', id: 6},
];
const GuideMain = ({params}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', marginLeft: 5, fontSize: 20}}>
          Hướng dẫn{' '}
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
        }}>
        {listHelp.slice(0, 3).map((item, index) => {
          return <ItemRow item={item} key={item.id.toString()} />;
        })}
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
        }}>
        {listHelp.slice(3, 6).map((item, index) => {
          return <ItemRow item={item} key={item.id.toString()} />;
        })}
      </View>
    </View>
  );
};

export default GuideMain;
const ItemRow = ({item}) => (
  <TouchableOpacity style={styles.button}>
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
    <Text style={{fontSize: 12, marginTop: 5}}>{item.title}</Text>
  </TouchableOpacity>
);
