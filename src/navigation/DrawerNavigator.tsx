import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import OrdersScreen from '../screens/OrdersScreen';
import CustomDrawer from './CustomDrawer';
import AnimatedDrawerContent from './AnimatedDrawerContent';

export type DrawerParamList = {
  HomeTabs: undefined;
  Orders: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: {
          flex: 1,
          width: '60%',
          backgroundColor: 'transparent',
        },
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name="HomeTabs"
        options={{
          headerShown: false,
        }}>
        {props => <AnimatedDrawerContent {...props} component={BottomTabNavigator} />}
      </Drawer.Screen>
      <Drawer.Screen name="Orders" options={{title: 'My Orders'}}>
        {props => <AnimatedDrawerContent {...props} component={OrdersScreen} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
