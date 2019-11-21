import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TabBarIcon from '../../ui/components/TabBarIcon';



export default function BoutiquesScreen() {
  return (
    <View style={styles.container}>
      <Text>Screen pour Boutique</Text>
    </View>
  );
}



BoutiquesScreen.navigationOptions = {
  tabBarLabel: 'Boutique',
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