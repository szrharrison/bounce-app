const sessionReducer = (session = {}, event) => {
  switch (event.type) {
    case "logged_in": {
      return {
        ...session,
        loggedIn: true,
        jwt: event.payload
      };
    }
    case "logged_out": {
      return {
        loggedIn: false
      };
    }
    default:
      return session;
  }
};

export default sessionReducer;