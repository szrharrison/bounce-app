import Api from "../api";
import userLoaded from "../events/user_loaded";

const loadUser = (jwt) => (dispatch) => {
  return Api.getUser(jwt).then(user => {
    console.log("Finished loading user:", user);
    dispatch(userLoaded(user.first_name, user.last_name));
  });
};

export default loadUser;