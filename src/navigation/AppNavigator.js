import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigation from './Drawer';
import { WelcomeScreen } from '../screens/authentication/WelcomeScreen';
import { AuthLoadingScreen}  from '../screens/authentication/AuthLoadingScreen';
import { SignUpScreen } from '../screens/authentication/SignUpScreen';


const AppNavigator = createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  App: WelcomeScreen,
  SignUp : SignUpScreen,
  Drawer: DrawerNavigation,
})

export default createAppContainer(AppNavigator);
