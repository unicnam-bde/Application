import { Component } from "react";
import { AsyncStorage } from "react-native";

export class LogOutScreen extends Component {
  async componentDidMount(){
    await this._signOutAsync();
  }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
      };

  render() {
    return null
  }
}