import React, { Component } from 'react';
import Icon from '@expo/vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
import { DashboardTabNavigator} from '../navigation/DashBoardTabNavigator';

export const DashboardStackNavigator = createStackNavigator(
    {
      DashboardTabNavigator: DashboardTabNavigator
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => this.props.navigation.openDrawer()}
              name="md-menu"
              color='white'
              size={30}
            />
          )
        };
      }
    }
  );