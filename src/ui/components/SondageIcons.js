import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function SondageIcons(props) {
  return (
    <Ionicons
      name={props.name}
      size={20}
      color='#ba002a'
    />
  );
}
