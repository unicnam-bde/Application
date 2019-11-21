import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TabBarIcon from '../../ui/components/TabBarIcon';



export default function BadgesScreen() {
  return (
    <View style={styles.container}>
      <Text>Screen pour badges</Text>
    </View>
  );
}



BadgesScreen.navigationOptions = {
  tabBarLabel: 'Badges',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-medal' : 'md-medal'}
    />
  ),
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });
  
