import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';



export default function TestStack() {
  return (
    <View style={styles.container}>
      <Text>Screen pour Boutique</Text>
    </View>
  );
}



TestStack.navigationOptions = {
  tabBarLabel: 'TestStack',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
    />
  ),
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });