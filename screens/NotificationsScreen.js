import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TabBarIcon from "../components/TabBarIcon";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Screen pour badges</Text>
    </View>
  );
}

NotificationsScreen.navigationOptions = {
  tabBarLabel: "Notifications",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
