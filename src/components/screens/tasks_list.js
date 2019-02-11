import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { SafeAreaView } from "react-navigation";
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
    return <SafeAreaView style={styles.container}>
    </SafeAreaView>;
  }
}

export default TasksList;
