const userReducer = (user = {}, event) => {
  switch (event.type) {
    case "user_loaded": {
      return {
        ...user,
        firstName: event.payload.firstName,
        lastName: event.payload.lastName,
      };
    }
    default: {
      return user;
    }
  }
};

export default userReducer;