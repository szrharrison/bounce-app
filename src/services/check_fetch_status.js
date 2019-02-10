const checkFetchStatus = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    const error = new Error("Response code " + response.status + ": " + response.statusMessage);
    error.name = "ResponseError";
    console.error(error);
    throw error;
  }
};

export default checkFetchStatus;