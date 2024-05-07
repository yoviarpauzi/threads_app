import { getProfile, login, register } from "../../utils/network-data";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const userRegisterActionCreator = (action) => {
  return {
    type: "USER_REGISTER",
    payload: action,
  };
};

const userLoginActionCreator = (action) => {
  return {
    type: "USER_LOGIN",
    payload: action,
  };
};

const userProfileActionCreator = (action) => {
  return {
    type: "USER_PROFILE",
    payload: action,
  };
};

const userResetState = (action) => {
  return {
    type: "USER_RESET",
    payload: action,
  };
};

const asyncUserRegister = (name, email, password) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await register({ name, email, password });
      dispatch(userLoginActionCreator(response));
    } catch (e) {
      dispatch(
        userRegisterActionCreator({
          status: "fail",
          message: e.message,
        })
      );
    }
    dispatch(hideLoading());
  };
};

const asyncUserLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await login({ email, password });
      dispatch(userLoginActionCreator(response));
    } catch (e) {
      dispatch(
        userLoginActionCreator({
          data: {},
          status: "fail",
          message: e.message,
        })
      );
    }
    dispatch(hideLoading());
  };
};

const asyncUserProfile = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await getProfile();
      dispatch(userProfileActionCreator(response));
    } catch (e) {
      dispatch(
        userProfileActionCreator({
          status: "fail",
          message: e.message,
        })
      );
    }
    dispatch(hideLoading());
  };
};

export {
  userLoginActionCreator,
  userRegisterActionCreator,
  userProfileActionCreator,
  userResetState,
  asyncUserRegister,
  asyncUserLogin,
  asyncUserProfile,
};
