const userLoaded = (firstName, lastName) => ({
  type: "user_loaded",
  payload: {
    firstName,
    lastName
  }
});

export default userLoaded;