import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { View } from "react-native";
import Api from "../../services/api";
import styles from "../../services/styles";

class TasksList extends Component {
  static propTypes = {
    jwt: PropTypes.string.isRequired,
  };

  static navigationOptions = {
    title: "View"
  };

  componentDidMount() {
    Api.getTasks(this.props.jwt).then((tasks) => {
      this.setState({ tasks });
    });
  }

  render() {
    return <View style={styles.container}>

    </View>;
  }
}

export default TasksList;
