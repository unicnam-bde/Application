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
import { CardArticle } from "../../ui/components/CardArticle";
import articles from "../../ui/assets/Data";

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={articles}
          keyExtractor={item => item.n_id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Article", {
                  title: item.n_label,
                  description: item.n_description,
                  image: item.n_description,
                  date: item.n_date,
                  type: item.n_type
                })
              }
            >
              <CardArticle
                title={item.n_label}
                infos={item.n_description}
                image={item.n_image}
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
