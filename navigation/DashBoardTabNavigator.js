import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import LinkScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ContactScreen from '../screens/Contact';

export const DashboardTabNavigator = createBottomTabNavigator(
    {
      Link : LinkScreen,
      Settings : SettingsScreen,
      Contact : ContactScreen
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          headerTitle: routeName,
          headerStyle :{
              backgroundColor : '#ba002a'
          },
          headerTintColor : 'white'
        };
      }
    }
  );