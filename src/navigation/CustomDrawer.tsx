import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const {navigation, state} = props;

  const menuItems = [
    {name: 'Home', route: 'HomeTabs', icon: '🏠'},
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
          const isFocused =
            state.routeNames[state.index] === item.route ||
            (item.params?.screen &&
              state.routes[state.index]?.state?.routes?.[
                state.routes[state.index]?.state?.index || 0
              ]?.name === item.params.screen);

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
    backgroundColor: '#16213e',
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
