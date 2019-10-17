import React from 'react';
import { Platform } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import TabBarIcon from '../components/TabBarIcon';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

SettingsScreen.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};
