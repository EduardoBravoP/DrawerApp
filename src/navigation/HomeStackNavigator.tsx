import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';

export type HomeStackParamList = {
  screen1: undefined;
  screen2: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="screen1"
        component={Screen1}
        options={{title: 'Screen 1'}}
      />
      <Stack.Screen
        name="screen2"
        component={Screen2}
        options={{title: 'Screen 2'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
