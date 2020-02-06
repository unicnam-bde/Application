import React, { Component, version } from "react";
import { View, TouchableOpacity, StyleSheet, TextInput,Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import { WhiteSpace } from "@ant-design/react-native";

class LogInScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="Go to the App"
          onPress={() => this.props.navigation.navigate("Accueil")}
        />
      </View>
    );
  }
}
export class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.connexion}>
          <TextInput
            type="username"
            placeholder="Email CNAM"
            placeholderTextColor="#C0C0C0"
            style={styles.input}
          /> 
          <TextInput
            type="password"
            placeholder="Password"
            placeholderTextColor="#C0C0C0"
            style={styles.input}
          />
          <View style={{ flexDirection: "row",justifyContent : 'space-between' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Acceuil")}
            >
              <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text style={styles.textButton}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection :"row", justifyContent:"center"}}>
            <Text style={styles.forgetpasswd}>Mot de passe oublié ?</Text>
          </View>
        </View>
      </View>
    );
  }
}

export const LogStackNav = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  LogIn: {
    screen: LogInScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ba002a"
  },
  connexion: {
    margin: 0,
    padding: 0,
    flexDirection: "column",
    width: 300,
    height: 300
  },
  input: {
    marginBottom: 20,
    padding: 5,
    height: 50,
    backgroundColor: "#990024",
    borderRadius: 5,
    color: "white"
  },
  button: {
    backgroundColor: "white",
    paddingVertical : 20,
    paddingHorizontal : 50,
    alignItems : 'center',
    borderRadius : 10,
  },
  textButton:{
    color: "#ba002a"
  },
  forgetpasswd:
  {
    paddingTop: 10,
    color:"white",
    justifyContent: "center"
  }
});
