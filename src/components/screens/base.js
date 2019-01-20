import React, { Component } from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { AsyncStorage, Text, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-navigation";
import getUser from "../../services/selectors/get_user";
import loadUser from "../../services/actions/load_user";
import loggedOut from "../../services/events/logged_out";
import styles from "../../services/styles";


class Base extends Component {
  static propTypes = {
    loadUser: PropTypes.func.isRequired,
    loggedOut: PropTypes.func.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }).isRequired,
  };

  logOut = () => {
    AsyncStorage.clear().catch();
    this.props.loggedOut();
    this.props.navigation.navigate("Auth");
  };

  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return <SafeAreaView>
      <Text>Bounce App</Text>
      <Text>Welcome {this.props.user.firstName}!</Text>
      <TouchableHighlight
        onPress={this.logOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableHighlight>
    </SafeAreaView>;
  }
}

const mapStateToProps = (state, props) => ({
  user: getUser(state, props)
});

export default connect(mapStateToProps, { loadUser, loggedOut })(Base);
