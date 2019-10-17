import React from 'react';
import { createAppContainer, createSwitchNavigator,defaultNavigatonOptions } from 'react-navigation';

import DrawerNavigation from './Drawer';
import { WelcomeScreen } from '../screens/WelcomeScreen';


const App = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Welcome: WelcomeScreen,
  Drawer: DrawerNavigation,
})

export default createAppContainer(App);
