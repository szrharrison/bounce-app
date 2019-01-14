const loggedIn = (jwt) => ({
  type: "logged_in",
  payload: jwt
});

export default loggedIn;