import React from 'react';
import { Linking, Text } from 'react-native';

export default function Anchor(props) {
  _handlePress = () => {
    Linking.openURL(props.href);
    props.onPress && props.onPress();
  };

    return (
        
            <Text onPress={this._handlePress}>
              {props.children}
            </Text>
    );
}