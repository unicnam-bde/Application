import React from 'react';
import { ScrollView, StyleSheet,Text,View } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import {Platform} from 'react-native';
import Anchor from '../components/Anchor'

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/*Créer un component Entete et ajouter une image au Anchor*/}
      <Anchor href='http://www.caf.fr' > Site de la CAF pour les APL</Anchor>
      <Anchor href='http://www.caf.fr' > Mobili jeune</Anchor>

    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title : 'Links',
  tabBarLabel: 'Links',
  headerStyle:{
    backgroundColor:'#ba002a'
  },
  headerTintColor : 'white',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  titre:{
    paddingLeft:5,
    paddingRight:5,
    fontWeight:'bold',
    fontSize:30
  }
});
