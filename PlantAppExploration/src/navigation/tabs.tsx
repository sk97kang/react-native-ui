import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// Screens
import {Home} from '../screens';

// Constants
import {icons, COLORS} from '../constants';

// Style
import styled from 'styled-components/native';

const Tab = createBottomTabNavigator();

const tabOptions: BottomTabBarOptions = {
  showLabel: false,
  style: {
    height: '10%',
  },
};

const CameraButton = () => {
  return (
    <CameraButtonContainer>
      <CameraButtonImage source={icons.camera} resizeMode="contain" />
    </CameraButtonContainer>
  );
};

const CameraButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${COLORS.primary};
`;

const CameraButtonImage = styled.Image`
  width: 23px;
  height: 23px;
`;

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
                <Image
                  source={icons.flash}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
            case 'Box':
              return (
                <Image
                  source={icons.cube}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
            case 'Camera':
              return <CameraButton />;
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
            case 'Favourite':
              return (
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{tintColor: tintColor, width: 25, height: 25}}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Box" component={Home} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favourite" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
