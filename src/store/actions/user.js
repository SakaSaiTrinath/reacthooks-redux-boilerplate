import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

const userLoggedIn = () => ({
  type: USER_LOGGED_IN,
  user: { token: "sometoken" }
});

const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const loginAction = callback => dispatch => {
  dispatch(userLoggedIn());
  callback();
};

export const logoutAction = callback => dispatch => {
  dispatch(userLoggedOut());
  callback();
};
