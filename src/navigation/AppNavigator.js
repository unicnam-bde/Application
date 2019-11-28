import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigation from './Drawer';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { AuthLoadingScreen}  from '../screens/AuthLoadingScreen';


const AppNavigator = createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  App: WelcomeScreen,
  Drawer: DrawerNavigation,
})

export default createAppContainer(AppNavigator);
