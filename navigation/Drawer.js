import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { DashboardStackNavigator } from "./DashboardStackNavigator";
import { BisStackNav } from "./BisStackNav";

const Drawer = createDrawerNavigator({
  "Accueil": {
    screen: DashboardStackNavigator
  },
  "Liens Utiles": {
    screen: BisStackNav
  }
});
export default Drawer;
