const userReducer = (state = {}, action = {}) => {
  if (action.type == "USER_LOGIN") {
    return {
      data: action.payload.data,
      status: action.payload.status,
      message: action.payload.message,
    };
  }

  if (action.type == "USER_REGISTER") {
    return {
      status: action.payload.status,
      message: action.payload.message,
    };
  }

  if (action.type == "USER_PROFILE") {
    return {
      data: action?.payload?.data?.user,
      status: action.payload.status,
      message: action.payload.message,
    };
  }

  if (action.type == "USER_RESET") {
    return {
      data: "",
      status: "",
      message: "",
    };
  }

  if (action.type == "USER_LEADERBOARD") {
    return {
      data: action?.payload?.data?.leaderboards,
      status: action.payload.status,
      message: action.payload.message,
    };
  }

  return state;
};

export default userReducer;
