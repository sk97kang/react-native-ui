import React from 'react';
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {Home} from '../screens/';

import {icons, COLORS} from '../constants';

import Icon from '../components/Icon';

const Tab = createBottomTabNavigator();

const tabOptions: BottomTabBarOptions = {
  showLabel: false,
  style: {
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Icon
                  source={icons.home}
                  resizeMode="contain"
                  size={30}
                  tintColor={tintColor}
                />
              );
            case 'Search':
              return (
                <Icon
                  source={icons.search}
                  resizeMode="contain"
                  size={30}
                  tintColor={tintColor}
                />
              );
            case 'Bookmark':
              return (
                <Icon
                  source={icons.bookmark}
                  resizeMode="contain"
                  size={30}
                  tintColor={tintColor}
                />
              );
            case 'Account':
              return (
                <Icon
                  source={icons.user}
                  resizeMode="contain"
                  size={30}
                  tintColor={tintColor}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Bookmark" component={Home} />
      <Tab.Screen name="Account" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
