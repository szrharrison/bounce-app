const sessionReducer = (session = {}, event) => {
  switch (event.type) {
    case "logged_in":
      return {
        ...session,
        loggedIn: true,
        jwt: event.payload
      };
    default:
      return session;
  }
};

const loggedIn = (jwt) => ({
  type: "logged_in",
  payload: jwt
});

export { loggedIn };

export default sessionReducer;