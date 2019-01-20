import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthFlow from "./src/components/navigation/auth_flow";
import AuthLoading from "./src/components/screens/auth_loading";
import Base from "./src/components/screens/base";
import store from "./src/services/redux_store";


function App(props) {
  return <Provider store={store}>
    <View style={styles.container}>
      <Base navigation={props.navigation}/>
    </View>
  </Provider>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// noinspection JSUnusedGlobalSymbols
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading,
    App,
    Auth: AuthFlow,
  },
  {
    initialRouteName: "AuthLoading",
  }
));