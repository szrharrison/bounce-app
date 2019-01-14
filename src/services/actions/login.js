import { AsyncStorage } from "react-native";
import Api from "../api";
import loggedIn from "../events/logged_in";

const login = (email, password) => {
  return (dispatch) => {
    return Api.login(email, password)
      .then(jwt => {
        AsyncStorage.setItem("jwt", jwt)
          .then(() => {
            dispatch(loggedIn(jwt));
          });
      }).catch((error) => {

      });
  };
};

export default login;