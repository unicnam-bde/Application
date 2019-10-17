import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {Platform} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Contact</Text>
    </ScrollView>
  );
}

ContactScreen.navigationOptions = {
  title : 'Contact',
  tabBarLabel: 'Contact',
  headerStyle:{
    backgroundColor:'#ba002a'
  },
  headerTintColor : 'white',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
    />
  ),
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});