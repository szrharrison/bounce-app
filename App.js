import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthFlow from "./src/components/navigation/auth_flow";
import AuthLoading from "./src/components/screens/auth_loading";
import AppFlow from "./src/components/navigation/app_flow";

// noinspection JSUnusedGlobalSymbols
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading,
    App: AppFlow,
    Auth: AuthFlow,
  },
  {
    initialRouteName: "AuthLoading",
  }
));