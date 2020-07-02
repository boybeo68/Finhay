import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../styles/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TitlePhone = ({textHeader, textContent}) => (
  <View
    style={{
      height: hp('10%'),
      marginTop: 20,
      alignItems: 'center',
    }}>
    <Text
      style={{
        color: colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
      }}>
      {textHeader}
    </Text>
    <Text style={{color: colors.grayText, fontSize: 13}}>{textContent}</Text>
  </View>
);

export default TitlePhone;
