import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import { CardArticle } from '../components/CardArticle';
import articles from '../assets/Data';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <CardArticle title={item.title} infos={item.infos} image={item.image}/>}
        />
    </View>
  );
}



HomeScreen.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
