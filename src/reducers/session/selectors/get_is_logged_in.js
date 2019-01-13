import { createSelector } from "reselect";
import getSession from "../../selectors/get_session";

const getIsLoggedIn = createSelector([
  getSession
], (session) => {
  return session.loggedIn || false;
});

export default getIsLoggedIn;