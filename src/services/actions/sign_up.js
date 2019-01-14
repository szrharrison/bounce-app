import { AsyncStorage } from "react-native";
import Api from "../api";
import loggedIn from "../events/logged_in";

const signUp = (email, password) => {
  return dispatch => {
    return Api.signUp(email, password)
      .then(jwt => {
        AsyncStorage.setItem("jwt", jwt)
          .then(() => {
            dispatch(loggedIn(jwt));
          });
      }).catch((error) => {
      dispatch(loggedIn(error.message));
    });
  };
};

export default signUp;