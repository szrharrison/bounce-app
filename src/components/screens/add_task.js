import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { View } from "react-native";
import styles from "../../services/styles";

class AddTask extends Component {
  static propTypes = {
    jwt: PropTypes.string.isRequired,
  };

  static navigationOptions = {
    title: "Dump"
  };

  render() {
    return <View style={styles.container}>

    </View>;
  }
}

export default AddTask;
