import { createDrawerNavigator } from "react-navigation";

import { DashboardStackNavigator } from "./DashboardStackNavigator";
import { LinkStackNav, ContactStackNav } from "./DrawerStackNav";
import { LogOutScreen} from '../screens/LogOutScreen';

const Drawer = createDrawerNavigator({
  "Accueil": {
    screen: DashboardStackNavigator
  },
  "Contact": {
    screen : ContactStackNav
  },
  "Liens Utiles": {
    screen: LinkStackNav
  },
  "Se Déconnecter": {
    screen : LogOutScreen
  }
},);
export default Drawer;
