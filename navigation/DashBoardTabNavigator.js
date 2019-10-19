import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Platform } from "react-native";
import BadgesScreen from "../screens/BadgesScreen";
import { HomeScreen } from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import BoutiquesScreen from "../screens/BoutiqueScreen";
import TabBarIcon from "../components/TabBarIcon";
import Icon from "@expo/vector-icons/Ionicons";
import DetailArticle from "../screens/DetailArticle";
import TestStack from "../screens/TestStack";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: "#ba002a"
          },
          headerTintColor: "white",
          headerTitle: "Accueil",
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              color="white"
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    Article: {
      screen: DetailArticle,
      navigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: "#ba002a"
          },
          headerTintColor: "white",
        };
      }
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: true
    }
  }
);

const BadgesStack = createStackNavigator(
  {
    Badges: {
      screen: BadgesScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: "#ba002a"
          },
          headerTintColor: "white",
          headerTitle: "Badges",
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              color="white"
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    Test: {
      screen: TestStack
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: true
    }
  }
);

const NotificationStack = createStackNavigator(
  {
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: "#ba002a"
          },
          headerTintColor: "white",
          headerTitle: "Notifications",
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              color="white"
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    Test: {
      screen: TestStack
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: true
    }
  }
);

const BoutiqueStack = createStackNavigator(
  {
    Boutique: {
      screen: BoutiquesScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: "#ba002a"
          },
          headerTintColor: "white",
          headerTitle: "Boutique",
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    Test: {
      screen: TestStack
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: true
    }
  }
);

export const DashboardTabNavigator = createBottomTabNavigator(
  {
    Acceuil: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Acceuil",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            />
          )
        };
      }
    },
    Badges: {
      screen: BadgesStack,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Badges",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-medal" : "md-medal"}
            />
          )
        };
      }
    },
    Notifications: {
      screen: NotificationStack,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Notifications",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={
                Platform.OS === "ios" ? "ios-notifications" : "md-notifications"
              }
            />
          )
        };
      }
    },
    Boutique: {
      screen: BoutiqueStack,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarLabel: "Boutique",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
            />
          )
        };
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
        headerStyle: {
          backgroundColor: "#ba002a"
        },
        headerTintColor: "white"
      };
    }
  }
);
