import getJwt from "../selectors/get_jwt";
import Api from "../api";
import userCreated from "../events/user_created";

const createUser = (firstName, lastName) => {
  return (dispatch, getState) => {
    const jwt = getJwt(getState(), {});
    return Api.createUser(firstName, lastName, jwt).then((user) => {
      console.log("Finished creating user:", user);
      dispatch(userCreated(user.first_name, user.last_name));
    });
  };
};

export default createUser;