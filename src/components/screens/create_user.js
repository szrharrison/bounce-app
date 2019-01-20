import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { KeyboardAvoidingView, Text, TextInput, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-navigation";
import createUser from "../../services/actions/create_user";
import styles from "../../services/styles";

class CreateUser extends Component {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    createUser: PropTypes.func.isRequired,
  };

  handleFirstNameChange = (firstName) => {
    this.setState({ firstName });
  };

  handleLastNameChange = (lastName) => {
    this.setState({ lastName });
  };

  submit = () => {
    this.props.createUser(this.state.firstName, this.state.lastName).then(() => {
      this.navigation.navigate("App")
    });
  };

  focusOnLastNameInput = () => {
    this.lastNameInput.focus();
  };

  setLastNameInputRef = lastNameInput => {
    this.lastNameInput = lastNameInput;
  };

  render() {
    return <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.viewContainer}
      >
        <TextInput
          autoCorrect={false}
          blurOnSubmit={false}
          keyboardAppearance="dark"
          onChangeText={this.handleFirstNameChange}
          onSubmitEditing={this.focusOnLastNameInput}
          placeholder="First Name"
          returnKeyType="next"
          style={styles.input}
          value={this.state.firstName}
        />
        <TextInput
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          keyboardAppearance="dark"
          onChangeText={this.handleLastNameChange}
          onSubmitEditing={this.submit}
          placeholder="Last Name"
          returnKeyType="go"
          style={styles.input}
          ref={this.setLastNameInputRef}
          value={this.state.lastName}
        />
        <TouchableHighlight
          onPress={this.submit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </SafeAreaView>;
  }

  state = {
    firstName: "",
    lastName: ""
  };
}

export default connect(null, { createUser })(CreateUser);
