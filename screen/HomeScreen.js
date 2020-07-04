import {View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RichTab from './Tab/RichTab';
import GoldTab from './Tab/GoldTab';
import AddTab from './Tab/AddTab';
import BagTab from './Tab/BagTab';
import BlogTab from './Tab/BlogTab';
import {MyTabBar} from '../navigations/CustomTab';
import {colors} from '../styles/colors';

const Tab = createBottomTabNavigator();
function HomeScreen(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.grayText,
      }}
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Rich"
        options={{title: 'Tài sản'}}
        component={RichTab}
      />
      <Tab.Screen
        name="Gold"
        options={{title: 'Mục tiêu'}}
        component={GoldTab}
      />
      <Tab.Screen name="Add" component={AddTab} />
      <Tab.Screen
        name="Bag"
        options={{title: 'Túi ba gang'}}
        component={BagTab}
      />
      <Tab.Screen name="Blog" options={{title: 'Blog'}} component={BlogTab} />
    </Tab.Navigator>
  );
}

export default HomeScreen;
