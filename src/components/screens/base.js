import React, { Component } from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { AsyncStorage, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import loggedIn from "../../services/events/logged_in";

class Base extends Component {
  static propTypes = {
    loggedIn: PropTypes.func.isRequired
  };

  componentDidMount() {
    AsyncStorage.getItem("jwt").then((jwt) => {
      if (jwt) {
        this.props.loggedIn(jwt);
      }
    });
  }

  render() {
    return <SafeAreaView>
      <Text>Bounce App</Text>
    </SafeAreaView>;
  }
}

export default connect(null, { loggedIn })(Base);
