import React, { Component, version } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  Picker
} from "react-native";
import { createStackNavigator } from "react-navigation";

export class SignUpScreen extends Component {
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
          <TextInput
            type="password"
            placeholder="Confirm Password"
            placeholderTextColor="#C0C0C0"
            style={styles.input}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Acceuil")}
            >
              <Text style={styles.textButton}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

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
    paddingVertical: 20,
    paddingHorizontal: 50,
    alignItems: "center"
  },
  textButton: {
    color: "#ba002a"
  }
});
