import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { Switch, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Rating } from "react-native-ratings";
import styles from "../../services/styles";

const fireIcon = require("../../images/fire.png");
class AddTask extends Component {
  static propTypes = {
    jwt: PropTypes.string.isRequired,
  };

  static navigationOptions = {
    title: "Dump"
  };

  focusOnUrgency = () => {
    this.inputRefs.urgency.togglePicker(true);
  };

  focusOnName = () => {
    this.inputRefs.name.focus();
  };

  focusOnImportance = () => {
    this.inputRefs.importance.togglePicker(true);
  };

  onEasyStartTaskChange = (easyStartTask) => {
    this.setState({ easyStartTask });
  };

  onImportanceChange = (importance) => {
    this.setState({ importance });
  };

  onNameChange = (name) => {
    this.setState({ name });
  };

  onUrgencyChange = (urgency) => {
    this.setState({ urgency });
  };

  inputRefs = {};

  render() {
    return <SafeAreaView style={styles.container}>
      <Text style={styles.inputLabel}>Name:</Text>
      <TextInput
        ref={(el) => this.inputRefs.name = el}
        style={styles.input}
        autoComplete="off"
        clearButtonMode="unless-editing"
        disableFullscreenUI={true}
        keyboardAppearance="dark"
        onChangeText={this.onNameChange}
        onSubmitEditing={this.focusOnUrgency}
        returnKeyType="next"
        textContentType="none"
        value={this.state.name}
      />
      <Text style={styles.inputLabel}>Urgency:</Text>
      <Rating
        type="custom"
        ratingImage={fireIcon}
        ratingBackgroundColor="#222"
        onFinishRating={this.onUrgencyChange}
        style={styles.rating}
      />
      <Text style={styles.inputLabel}>Importance:</Text>
      <Rating
        type="star"
        ratingBackgroundColor="#222"
        onFinishRating={this.onImportanceChange}
        style={styles.rating}
      />
      <Text style={styles.inputLabel}>Easy Start:</Text>
      <Switch
        ref={(el) => this.inputRefs.easyStartTask = el}
        onValueChange={this.onEasyStartTaskChange}
        value={this.state.easyStartTask}
      />
    </SafeAreaView>;
  };

  state = {
    name: "",
    urgency: 0,
    importance: 0,
    easyStartTask: false,
    dueDate: null
  };
}

export default AddTask;
