import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from '@screens/MenuScreen';
import ClockScreen from '@screens/ClockScreen';
import { ClockStackParamList } from '@navigation/types';

const Stack = createStackNavigator<ClockStackParamList>();

const ClockStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name='Menu'
        component={MenuScreen}
        options={({ route }) => ({ title: route.name })}
      />
      <Stack.Screen
        name='Clock'
        component={ClockScreen}
        options={({ route }) => ({ title: route.name })}
      />
    </Stack.Navigator>
  );
};

export default ClockStackNavigator;
