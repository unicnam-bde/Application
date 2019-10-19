import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import { StackNavigator } from "react-navigation";
import { CardArticle } from "../components/CardArticle";
import articles from "../assets/Data";

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={articles}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Article",{title: item.title,})}
            >
              <CardArticle
                title={item.title}
                infos={item.infos}
                image={item.image}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
