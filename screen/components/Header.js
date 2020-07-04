import React from 'react';
import {Text, View} from 'react-native';
import {Thumbnail, Icon} from 'native-base';

export const HeaderLeft = ({params}) => {
  const uri =
    'https://cdn.itviec.com/employers/finhay/logo/social/RSuVqQWzxoobx47hioYEk7XA/Finhay-iOS-app-icon-512.png';

  return (
    <View style={{padding: 10, flexDirection: 'row'}}>
      <Thumbnail style={{marginRight: 5}} small source={{uri: uri}} />
      <View>
        <Text style={{color: '#fff'}}>Nguyễn Thạc Tùng</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 10, color: '#fff', marginTop: 3}}>
            THÀNH VIÊN BẠC
          </Text>
          <Icon
            type="FontAwesome5"
            style={{fontSize: 13, marginLeft: 5, color: 'orange'}}
            name="medal"
          />
        </View>
      </View>
    </View>
  );
};

const HeaderRight = (params) => {};
