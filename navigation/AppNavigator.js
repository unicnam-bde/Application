import React from 'react';
import { createAppContainer, createSwitchNavigator,defaultNavigatonOptions } from 'react-navigation';

import DrawerNavigation from './Drawer';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { DashboardStackNavigator } from "./DashboardStackNavigator";
import { AuthLoadingScreen}  from '../screens/AuthLoadingScreen';


const App = createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  App: WelcomeScreen,
  Drawer: DrawerNavigation,
})

export default createAppContainer(App);
