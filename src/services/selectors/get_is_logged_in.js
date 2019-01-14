import { createSelector } from "reselect";
import getSession from "./get_session";

const getIsLoggedIn = createSelector([
  getSession
], (session) => {
  return session.loggedIn || false;
});

export default getIsLoggedIn;