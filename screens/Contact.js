import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Platform } from "react-native";
import TabBarIcon from "../components/TabBarIcon";
import { createMaterialTopTabNavigator } from "react-navigation";
import { FlatList } from "react-native-gesture-handler";
import contact from "../assets/Data_Contact";
import { CardContact } from "../components/CardContact";

export  function ContactBDEScreen() {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={contact}
        keyExtractor={item => item.c_id.toString()}
        renderItem={({ item }) =>
          item.c_role == "BDE" ? (
            <CardContact
              name={item.c_name}
              firstname={item.c_firstname}
              email={item.c_email}
              phone={item.c_phone}
            />
          ) : (
            <View style={{ height: 0 }} />
          )
        }
      />
    </ScrollView>
  );
}

export function ContactCNAMScreen(){
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={contact}
        keyExtractor={item => item.c_id.toString()}
        renderItem={({ item }) =>
          item.c_role == "CNAM" ? (
            <CardContact
              name={item.c_name}
              firstname={item.c_firstname}
              email={item.c_email}
              phone={item.c_phone}
            />
          ) : (
            <View style={{ height: 0 }} />
          )
        }
      />
    </ScrollView>
  );
}
ContactBDEScreen.navigationOptions = {
  title: "Contact",
  tabBarLabel: "Contact",
  headerStyle: {
    backgroundColor: "#ba002a"
  },
  headerTintColor: "white",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
    />
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export const ContactTabNavigator = createMaterialTopTabNavigator(
  {
    BDE: {
      screen: ContactBDEScreen
    },
    CNAM: {
      screen: ContactCNAMScreen
    }
  },
  {
    tabBarPosition: "top",
    swipeEnable: true,
    tabBarOptions: {
      activeTintColor: "#ba002a",
      inactiveTintColor: "#ba002a",
      style: {
        backgroundColor: "#FFFFFF"
      },
      labelStyle: {
        textAlign: "center"
      },
      indicatorStyle: {
        borderBottomColor: "#ba002a",
        borderBottomWidth: 2
      }
    }
  }
);
