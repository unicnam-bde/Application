import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Platform } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import BadgesScreen from "../screens/logged/BadgesScreen";
import { HomeScreen } from "../screens/logged/HomeScreen";
import NotificationsScreen from "../screens/logged/NotificationsScreen";
import BoutiquesScreen from "../screens/logged/BoutiqueScreen";
import TabBarIcon from "../ui/components/TabBarIcon";
import DetailArticle from "../screens/logged/DetailArticle";

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
      navigationOptions: () => {
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
      screen: BoutiquesScreen
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
      screen: BoutiquesScreen
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
              color='white'
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    Test: {
      screen: BoutiquesScreen
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
          tabBarLabel: "Accueil",
          tabBarOptions :{
            activeTintColor : '#ba002a',
          },
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
          tabBarOptions :{
            activeTintColor : '#ba002a',
          },
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
          tabBarOptions :{
            activeTintColor : '#ba002a',
          },
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
          tabBarOptions :{
            activeTintColor : '#ba002a',
          },
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