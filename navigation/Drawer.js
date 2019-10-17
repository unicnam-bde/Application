import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { DashboardStackNavigator } from "./DashboardStackNavigator";
import { BisStackNav } from "./BisStackNav";

const Drawer = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  },
  "Dashboard Bis": {
    screen: BisStackNav
  }
});
export default Drawer;
