import React, { Component } from "react";
import { View,Button } from "react-native";
import { createStackNavigator } from "react-navigation";

class LogInScreen extends Component{
  render(){
    return(
      <View>
          <Button title="Go to the App" onPress={()=> this.props.navigation.navigate("Accueil")}/>
      </View>
    )
  }
}
export class WelcomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ba002a"
        }}
      >
        <Button
          title="Login"
          color="white"
          onPress={() => this.props.navigation.navigate("Acceuil")}
        />
        <Button
          color="white"
          title="Sign Up"
          onPress={() => alert("button pressed")}
        />
      </View>
    );
  }
}

export const LogStackNav = createStackNavigator(
  {
    "Welcome" :
    {
      screen : WelcomeScreen
    },
    "LogIn": {
      screen : LogInScreen
    }
  }
);