import {View, ActivityIndicator} from 'react-native';
import React from 'react';

export const SplashScreen = React.memo((props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="small" color="#00ff00" />
    </View>
  );
});
