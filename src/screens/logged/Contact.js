import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import { FlatList } from "react-native-gesture-handler";
import contact from "../../ui/assets/Data_Contact";
import { CardContact } from "../../ui/components/CardContact";
import { SearchBar } from "react-native-elements";

export class ContactBDEScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: contact,
      error: null,
      value:''
    };
    this.arrayholder = contact;
  }
  updateSearch = search => {
    this.setState({ search });
  };

  searchFilterFunction = text => {
    this.setState({
      value: text
    });
      const newData = this.arrayholder.filter(item => {
      const itemData = `${item.c_name.toUpperCase()}   
      ${item.c_firstname.toUpperCase()} ${item.c_name.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  };

  render() {
    const search = this.state;
    return (
      <ScrollView style={styles.container}>
        <SearchBar
          placeholder="Recherche"
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.value}
        />
        <FlatList
          data={this.state.data}
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
        <View style={{ height: 0 }} />) } />
      </ScrollView>
    );
  }
}

export class ContactCNAMScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: contact,
      error: null,
      value:''
    };
    this.arrayholder = contact;
  }
  updateSearch = search => {
    this.setState({ search });
  };

  searchFilterFunction = text => {
    this.setState({
      value: text
    });
      const newData = this.arrayholder.filter(item => {
      const itemData = `${item.c_name.toUpperCase()}   
      ${item.c_firstname.toUpperCase()} ${item.c_name.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  };

  render() {
    const search = this.state;
    return (
      <ScrollView style={styles.container}>
        <SearchBar
          placeholder="Recherche"
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.value}
        />
        <FlatList
          data={this.state.data}
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
        <View style={{ height: 0 }} />) } />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
