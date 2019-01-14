import { createStackNavigator } from "react-navigation";
import Login from "../screens/login";
import SignUp from "../screens/sign_up";
import withProvider from "../hocs/with_provider";
import CreateUser from "../screens/create_user";

const AuthFlow = createStackNavigator({
  Login: withProvider(Login),
  SignUp: withProvider(SignUp),
  CreateUser: withProvider(CreateUser)
}, {
  initialRouteName: "Login"
});

export default AuthFlow;