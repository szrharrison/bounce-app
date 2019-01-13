import { createSelector } from "reselect";
import getSession from "../../selectors/get_session";

const getJwt = createSelector([
  getSession
], (session) => {
  return session.jwt || null;
});

export default getJwt;