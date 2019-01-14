import React, { Component } from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { KeyboardAvoidingView, Text, TextInput, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-navigation";
import signUp from "../../services/actions/sign_up";
import styles from "../../services/styles";

class SignUp extends Component {
  static navigationOptions = {
    title: "Sign Up",
    headerBackTitle: "Login"
  };

  static propTypes = {
    signUp: PropTypes.func.isRequired,
  };

  signUp = () => {
    this.props.signUp(this.state.email, this.state.password).then(() => {
      this.props.navigation.navigate("CreateUser");
    }).catch(() => {
      this.props.navigation.navigate("Login");
    });
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  focusOnPasswordField = () => {
    this.passwordInput.focus();
  };

  setPasswordInputRef = passwordInput => {
    this.passwordInput = passwordInput;
  };

  render() {
    return <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.viewContainer}
      >
        <TextInput
          autoCapitalize="none"
          blurOnSubmit={false}
          keyboardAppearance="dark"
          keyboardType="email-address"
          onChangeText={this.handleEmailChange}
          onSubmitEditing={this.focusOnPasswordField}
          placeholder="email"
          returnKeyType="next"
          spellCheck={false}
          style={styles.input}
          textContentType="emailAddress"
          value={this.state.email}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          enablesReturnKeyAutomatically
          keyboardAppearance="dark"
          onChangeText={this.handlePasswordChange}
          onSubmitEditing={this.login}
          placeholder="password"
          returnKeyType="go"
          spellCheck={false}
          style={styles.input}
          textContentType="password"
          ref={this.setPasswordInputRef}
          value={this.state.password}
        />
        <TouchableHighlight
          onPress={this.signUp}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </SafeAreaView>;
  }

  state = {
    email: "",
    password: ""
  };
}


export default connect(null, { signUp })(SignUp);
