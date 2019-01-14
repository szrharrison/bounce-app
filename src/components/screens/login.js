import React from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { KeyboardAvoidingView, Text, TextInput, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-navigation";
import login from "../../services/actions/login";
import styles from "../../services/styles";


export class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  login = () => {
    this.props.login(this.state.email, this.state.password);
  };

  toSignUpScreen = () => {
    this.props.navigation.navigate("SignUp");
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
          enablesReturnKeyAutomatically={true}
          keyboardAppearance="dark"
          onChangeText={this.handlePasswordChange}
          onSubmitEditing={this.login}
          placeholder="password"
          returnKeyType="go"
          secureTextEntry={true}
          spellCheck={false}
          style={styles.input}
          textContentType="password"
          ref={this.setPasswordInputRef}
          value={this.state.password}
        />
        <TouchableHighlight
          onPress={this.login}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <Text style={styles.text}>OR</Text>
        <TouchableHighlight
          onPress={this.toSignUpScreen}
          style={styles.link}
        >
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </SafeAreaView>;
  }

  state = {
    email: "",
    password: ""
  };
}

export default connect(null, { login })(Login);