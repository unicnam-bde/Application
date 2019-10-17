import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import BadgesScreen from "../screens/BadgesScreen";
import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import BoutiquesScreen from "../screens/BoutiqueScreen";

export const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Badges: BadgesScreen,
    Notifications : NotificationsScreen,
    Boutique : BoutiquesScreen
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
          backgroundColor: "#ba002a"
        },
        headerTintColor: "white"
      };
    }
  }
);
