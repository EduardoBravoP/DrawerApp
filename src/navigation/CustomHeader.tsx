import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

type CustomHeaderProps = {
  title: string;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({title}) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}>
        <View style={styles.menuIcon}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 56,
    marginTop: 40
  },
  menuButton: {
    padding: 8,
    width: 40,
  },
  menuIcon: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  menuLine: {
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 40,
  },
});

export default CustomHeader;
