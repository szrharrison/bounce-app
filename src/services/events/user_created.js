const userCreated = (firstName, lastName) => ({
  type: "user_created",
  payload: { firstName, lastName }
});

export default userCreated;