import React, { Component } from "react";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { SafeAreaView } from "react-navigation";

class AuthLoading extends Component {
  componentDidMount() {
    AsyncStorage.getItem("jwt").then((jwt) => {
      if (jwt) {
        this.props.navigation.navigate("App");
      } else {
        this.props.navigation.navigate("Auth");
      }
    });
  }

  render() {
    return <SafeAreaView>
      <ActivityIndicator/>
    </SafeAreaView>;
  }
}

export default AuthLoading;
