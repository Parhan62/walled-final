export const getCurrentUser = (arr) => {
  return arr.find((user) => {
    const loggedInUser = JSON.parse(localStorage.getItem("login"));

    return loggedInUser.email === user.email;
  });
};
