import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/reducers/root_reducer";
import Base from "./src/base";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <View style={styles.container}>
        <Base/>
      </View>
    </Provider>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});