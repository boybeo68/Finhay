import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ButtonText = ({color, size, onPress, title, ...props}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[{justifyContent: 'center', alignItems: 'center'}, props.style]}>
    <Text style={{color, fontSize: size}}>{title}</Text>
  </TouchableOpacity>
);

export default ButtonText;
