import React from 'react';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

  const Drawer = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  });
  
  export default Drawer;