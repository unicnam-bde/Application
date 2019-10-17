import React, { Component } from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { createStackNavigator, NavigationActions } from "react-navigation";
import { DashboardTabNavigator } from "../navigation/DashBoardTabNavigator";
import LinksScreen from "../screens/LinksScreen";
import { DashboardStackNavigator } from "./DashboardStackNavigator";
import HomeScreen from "../screens/HomeScreen";

export const BisStackNav = createStackNavigator(
  {
    Link: LinksScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate('DashboardTabNavigator', {}, NavigationActions.navigate({ routeName: 'HomeScreen' }))}
            name="ios-arrow-round-back"
            color="white"
            size={30}
          />
        )
      };
    }
  }
);
