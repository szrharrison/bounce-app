import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { View } from "react-native";
import styles from "../../services/styles";

class DoTask extends Component {
  static propTypes = {
    jwt: PropTypes.string.isRequired,
  };

  static navigationOptions = {
    title: "Do"
  };

  render() {
    return <View style={styles.container}>
    </View>;
  }
}

export default DoTask;
