import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import type {StackNavigationProp} from '@react-navigation/stack';

type Screen1Props = {
  navigation: StackNavigationProp<any>;
};

const Screen1: React.FC<Screen1Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 1</Text>
      <Text style={styles.subtitle}>Home Stack - First Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('screen2')}>
        <Text style={styles.buttonText}>Go to Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Screen1;
