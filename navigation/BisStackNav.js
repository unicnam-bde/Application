import React, { Component } from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { createStackNavigator } from "react-navigation";
import { DashboardTabNavigator } from "../navigation/DashBoardTabNavigator";
import LinksScreen from "../screens/LinksScreen";

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
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
          />
        )
      };
    }
  }
);
