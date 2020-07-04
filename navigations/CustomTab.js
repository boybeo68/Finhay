import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'native-base';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../styles/colors';
export function MyTabBar({
  state,
  descriptors,
  navigation,
  activeTintColor,
  inactiveTintColor,
}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const iconName = ['home', 'windowso', 'dingding', 'hourglass', 'instagram'];

  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: colors.grayText,
        backgroundColor: '#fff',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const color = isFocused ? activeTintColor : inactiveTintColor;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (index === 2) {
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: colors.primary,
                alignSelf: 'flex-start',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                type="Ionicons"
                name="add"
                style={{color: '#fff', fontSize: 40}}
              />
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                height: heightPercentageToDP('9%'),
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Icon
                style={{fontSize: 25, color}}
                type="AntDesign"
                name={iconName[index]}
              />
              <Text
                style={{
                  color,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
}
