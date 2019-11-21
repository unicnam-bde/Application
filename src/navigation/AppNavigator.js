import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigation from './Drawer';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { AuthLoadingScreen}  from '../screens/AuthLoadingScreen';


const App = createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  App: WelcomeScreen,
  Drawer: DrawerNavigation,
})

export default createAppContainer(App);
