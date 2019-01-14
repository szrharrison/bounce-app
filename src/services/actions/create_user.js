import getJwt from "../selectors/get_jwt";
import Api from "../api";
import userCreated from "../events/user_created";

const createUser = (firstName, lastName) => {
  return (dispatch, getState) => {
    const jwt = getJwt(getState(), {});
    return Api.createUser(firstName, lastName, jwt).then((userJson) => {
      dispatch(userCreated(userJson.user.firstName, userJson.user.lastName));
    });
  };
};

export default createUser;