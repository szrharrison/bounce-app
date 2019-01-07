import React from "react";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import Login from "./components/login";

export default class App extends React.Component {
  login = (email, password) => {
    const baseUrl = "https://bounce-api.herokuapp.com";
    fetch(`${baseUrl}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        auth: {
          email,
          password
        }
      })
    }).then(resp => {
      return resp.json();
    }).then(responseJson => {
      console.log(responseJson);
      AsyncStorage.setItem("jwt", responseJson.jwt)
        .then(() => {
          this.setState({ loggedIn: true, jwt: responseJson.jwt });
        });
    }).catch((error) => {

    });
  };

  componentDidMount() {
    AsyncStorage.getItem("jwt").then((jwt) => {
      if (jwt) {
        this.setState({
          jwt,
          loggedIn: true
        });
      }
    });
  }

  render() {
    let view;
    if (this.state.loggedIn) {
      view = <Text>Bounce App</Text>;
    } else {
      view = <Login login={this.login}/>;
    }

    return <View style={styles.container}>
      {view}
    </View>;
  }

  state = {
    loggedIn: false,
    jwt: null
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
