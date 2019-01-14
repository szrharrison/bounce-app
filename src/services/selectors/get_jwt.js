import { createSelector } from "reselect";
import getSession from "./get_session";

const getJwt = createSelector([
  getSession
], (session) => {
  return session.jwt || null;
});

export default getJwt;