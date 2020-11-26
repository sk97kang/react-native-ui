import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import {PlantDetail} from './src/screens';
// Tabs
import Tabs from './src/navigation/tabs';

const theme = {
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
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />
        {/* Screens */}
        <Stack.Screen name="PlantDetail" component={PlantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
