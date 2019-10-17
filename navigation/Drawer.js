import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { DashboardStackNavigator } from "./DashboardStackNavigator";
import { LinkStackNav, ContactStackNav } from "./DrawerStackNav";

const Drawer = createDrawerNavigator({
  "Accueil": {
    screen: DashboardStackNavigator
  },
  "Contact": {
    screen : ContactStackNav
  },
  "Liens Utiles": {
    screen: LinkStackNav
  }
});
export default Drawer;
