import React, { Component } from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { AsyncStorage, Text } from "react-native";
import { loggedIn } from "./reducers/session/session_reducer";
import Login from "./login/login";
import getIsLoggedIn from "./reducers/session/selectors/get_is_logged_in";

class Base extends Component {
  static propTypes = {
    loggedIn: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool,
  };

  componentDidMount() {
    AsyncStorage.getItem("jwt").then((jwt) => {
      if (jwt) {
        this.props.loggedIn(jwt);
      }
    });
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Text>Bounce App</Text>;
    } else {
      return <Login/>;
    }
  }
}

const mapStateToProps = (state, props) => ({
  isLoggedIn: getIsLoggedIn(state, props)
});

export default connect(mapStateToProps, { loggedIn })(Base);
