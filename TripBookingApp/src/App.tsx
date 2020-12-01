import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {DestinationDetail, Onboarding} from './screens';

// tabs
import Tabs from './navigation/tabs';

// constants
import {COLORS, icons, SIZES} from './constants';

// style
import styled from 'styled-components/native';

// components
import Icon from './components/Icon';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Onboarding'}>
        {/* Screens */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: () => null,
            headerRight: () => (
              <BarMenu onPress={() => console.log('Pressed')}>
                <Icon source={icons.barMenu} resizeMode="contain" size={25} />
              </BarMenu>
            ),
          }}
        />

        <Stack.Screen
          name="DestinationDetail"
          component={DestinationDetail}
          options={{headerShown: false}}
        />

        {/* Tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: ({onPress}) => (
              <Back onPress={onPress}>
                <Icon source={icons.back} resizeMode="contain" size={25} />
              </Back>
            ),
            headerRight: () => (
              <Menu>
                <Icon source={icons.menu} resizeMode="contain" size={25} />
              </Menu>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const BarMenu = styled.TouchableOpacity`
  margin-right: ${SIZES.padding}px;
`;

const Back = styled.TouchableOpacity`
  margin-left: ${SIZES.padding}px;
`;

const Menu = styled.TouchableOpacity`
  margin-right: ${SIZES.padding}px;
`;
