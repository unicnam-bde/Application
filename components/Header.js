import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Text, View, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';
import ViewShot from 'react-native-view-shot';

export function Header(props) {
  return (
    <View style={styles.header}>
        <AntDesign name='menu-fold' size={25} color ='white'style={styles.menu}/>
        <Text style={styles.text}>{props.page}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flexDirection : 'row',
        paddingTop:35,
        height : 100,
        backgroundColor : 'red',
        justifyContent : 'center',
        alignItems: 'center',
    },
    text:{
        flex :1,
        marginRight: 25,
        fontSize : 20,
        color: 'white',
        textAlign: 'center'
    },
    menu:{
        marginLeft: 10
    }
  });