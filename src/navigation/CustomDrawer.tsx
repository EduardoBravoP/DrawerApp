import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const {navigation, state} = props;

  const menuItems = [
    {name: 'Home', route: 'HomeTabs', params: {screen: 'HomeTab'}, icon: '🏠'},
    {name: 'Cart', route: 'HomeTabs', params: {screen: 'Cart'}, icon: '🛒'},
    {
      name: 'Favourites',
      route: 'HomeTabs',
      params: {screen: 'Favourites'},
      icon: '❤️',
    },
    {name: 'Orders', route: 'Orders', icon: '📦'},
  ];

  const handleNavigation = (route: string, params?: any) => {
    navigation.navigate(route, params);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Beka</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}>
        {menuItems.map((item, index) => {
          const currentRoute = state.routes[state.index];
          const isOnHomeTabs = state.routeNames[state.index] === 'HomeTabs';
          const nestedTabName = currentRoute?.state?.routes?.[
            currentRoute?.state?.index || 0
          ]?.name;

          let isFocused = false;
          if (item.params?.screen) {
            // For Cart and Favourites: only active if on HomeTabs AND the nested tab matches
            isFocused = isOnHomeTabs && nestedTabName === item.params.screen;
          } else if (item.route === 'HomeTabs') {
            // For Home: only active if on HomeTabs AND the nested tab is HomeTab
            isFocused = isOnHomeTabs && nestedTabName === 'HomeTab';
          } else {
            // For Orders: just check if the route matches
            isFocused = state.routeNames[state.index] === item.route;
          }

          return (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, isFocused && styles.menuItemActive]}
              onPress={() => handleNavigation(item.route, item.params)}>
              <Text style={styles.icon}>{item.icon}</Text>
              <Text
                style={[
                  styles.menuText,
                  isFocused && styles.menuTextActive,
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollContent: {
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  menuItemActive: {
    backgroundColor: '#0f3460',
  },
  icon: {
    fontSize: 24,
    marginRight: 16,
  },
  menuText: {
    fontSize: 18,
    color: '#b0b0b0',
  },
  menuTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default CustomDrawer;
