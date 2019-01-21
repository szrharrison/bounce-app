import Api from "../api";
import userLoaded from "../events/user_loaded";
import getJwt from "../selectors/get_jwt";

const loadUser = () => {
  return (dispatch, getState) => {
    const jwt = getJwt(getState(), {});
    return Api.getUser(jwt).then(user => {
      console.log("Finished loading user:", user);
      dispatch(userLoaded(user.first_name, user.last_name));
    });
  };
};

export default loadUser;