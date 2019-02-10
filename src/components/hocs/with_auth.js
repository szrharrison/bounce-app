import React, { Component } from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { AsyncStorage } from "react-native";
import getIsLoggedIn from "../../services/selectors/get_is_logged_in";
import getJwt from "../../services/selectors/get_jwt";
import getUser from "../../services/selectors/get_user";
import loadUser from "../../services/actions/load_user";
import loggedIn from "../../services/events/logged_in";
import loggedOut from "../../services/events/logged_out";
import withProvider from "./with_provider";

const mapStateToProps = (state, props) => ({
  jwt: getJwt(state, props),
  isLoggedIn: getIsLoggedIn(state, props),
  user: getUser(state, props)
});

function withAuth(ChildComponent) {
  class ReturnComponent extends Component {
    static propTypes = {
      jwt: PropTypes.string,
      loadUser: PropTypes.func.isRequired,
      loggedIn: PropTypes.func.isRequired,
      loggedOut: PropTypes.func.isRequired,
      user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
      }),
    };

    componentDidMount() {
      if (!this.props.jwt) {
        AsyncStorage.getItem("jwt").then((jwt) => {
          if (jwt) {
            this.props.loggedIn(jwt);
            this.props.loadUser(jwt);
            this.jwt = jwt;
          } else {
            this.props.loggedOut();
            this.props.navigation.navigate("AuthLoading");
          }
        });
      } else {
        if (!this.props.user && !this.props.user.firstName) {
          this.props.loadUser(this.props.jwt);
        }
        if (!this.props.isLoggedIn) {
          this.props.loggedIn(this.props.jwt);
        }
      }
    }

    render() {
      const { loadUser, loggedIn, loggedOut, ...otherProps } = this.props;
      otherProps.jwt = this.jwt || this.props.jwt;

      if (otherProps.jwt) {
        return <ChildComponent {...otherProps}/>;
      } else {
        return null;
      }
    }
  }

  if (ChildComponent.navigationOptions) {
    ReturnComponent.navigationOptions = ChildComponent.navigationOptions;
  }

  return withProvider(connect(mapStateToProps, {
    loadUser,
    loggedIn,
    loggedOut
  })(ReturnComponent));
}

export default withAuth;