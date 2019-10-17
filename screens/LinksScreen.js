import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import TabBarIcon from '../components/TabBarIcon';
import {Platform} from 'react-native';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title : 'Links',
  tabBarLabel: 'Links',
  headerStyle:{
    backgroundColor:'#ba002a'
  },
  headerTintColor : 'white',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
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
