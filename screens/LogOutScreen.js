import React, { Component } from "react";
import { View,Button,AsyncStorage } from "react-native";

export class LogOutScreen extends Component {
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
      };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          color="#ba002a"
          title="Se déconnecter" onPress={this._signOutAsync} 
        />
      </View>
    );
  }
}