import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import {navigationRef} from '../helper/rootNavigation';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
