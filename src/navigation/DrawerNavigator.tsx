import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import OrdersScreen from '../screens/OrdersScreen';
import CustomDrawer from './CustomDrawer';
import AnimatedDrawerContent from './AnimatedDrawerContent';
import CustomHeader from './CustomHeader';

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
          width: '45%',
          backgroundColor:  '#1a1a2e',
        },
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        sceneStyle: {
          backgroundColor: '#1a1a2e',
        }
      }}>
      <Drawer.Screen
        name="HomeTabs"
        options={{
          headerShown: false,
        }}>
        {props => <AnimatedDrawerContent {...props} component={BottomTabNavigator} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Orders"
        options={{
          header: () => <CustomHeader title="My Orders" backgroundColor="#fff" />,
        }}>
        {props => <AnimatedDrawerContent {...props} component={OrdersScreen} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
