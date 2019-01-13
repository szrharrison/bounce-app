import { AsyncStorage } from "react-native";
import { loggedIn } from "../../reducers/session/session_reducer";

const login = (email, password) => {
  return (dispatch, getState) => {
    Api.login(email, password)
      .then(responseJson => {
        AsyncStorage.setItem("jwt", responseJson.jwt)
          .then(() => {
            dispatch(loggedIn(responseJson.jwt));
          });
      }).catch((error) => {

    });
  };
};

export default login;