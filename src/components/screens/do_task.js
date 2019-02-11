import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { SafeAreaView } from "react-navigation";
import styles from "../../services/styles";

class DoTask extends Component {
  static propTypes = {
    jwt: PropTypes.string.isRequired,
  };

  static navigationOptions = {
    title: "Do"
  };

  render() {
    return <SafeAreaView style={styles.container}>
    </SafeAreaView>;
  }
}

export default DoTask;
