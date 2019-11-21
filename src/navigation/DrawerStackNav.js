import React from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { createStackNavigator, NavigationActions } from "react-navigation";

import LinksScreen from "../screens/LinksScreen";
import { ContactTabNavigator } from "../screens/Contact";

export const LinkStackNav = createStackNavigator(
  {
    Link: LinksScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() =>
              navigation.navigate(
                "DashboardTabNavigator",
                {},
                NavigationActions.navigate({ routeName: "HomeScreen" })
              )
            }
            name="ios-arrow-round-back"
            color="white"
            size={30}
          />
        )
      };
    }
  }
);

export const ContactStackNav = createStackNavigator(
  {
    Contact: {
      screen: ContactTabNavigator,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#ba002a"
        },
        headerTintColor: "#FFFFFF",
        title: "Contact"
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() =>
              navigation.navigate(
                "DashboardTabNavigator",
                {},
                NavigationActions.navigate({ routeName: "HomeScreen" })
              )
            }
            name="ios-arrow-round-back"
            color="white"
            size={30}
          />
        )
      };
    }
  }
);
