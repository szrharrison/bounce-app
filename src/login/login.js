import React from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { Button, StyleSheet, TextInput, View } from "react-native";
import login from "./actions/login";


export class Login extends React.Component {
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

  render() {
    return <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={this.handleEmailChange}
        placeholder="email"
        returnKeyType="next"
        spellCheck={false}
        textContentType="emailAddress"
        value={this.state.email}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        returnKeyType="go"
        onChangeText={this.handlePasswordChange}
        placeholder="password"
        spellCheck={false}
        textContentType="password"
        value={this.state.password}
      />
      <Button title="Login" onPress={this.login}/>
    </View>;
  }

  state = {
    email: "",
    password: ""
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect(null, { login })(Login);