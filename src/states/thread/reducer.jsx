const threadReducer = (state = {}, action = {}) => {
  if (action.type == "THREAD_CREATE") {
    return {
      status: action.payload.status,
      message: action.payload.message,
    };
  }

  if (action.type == "THREAD_UPVOTE") {
    return {
      status: action.payload.status,
      message: action.payload.message,
    };
  }

  if (action.type == "THREAD_DOWNVOTE") {
    return {
      status: action.payload.status,
      message: action.payload.message,
    };
  }

  if (action.type == "THREAD_RESET") {
    return {
      data: {},
      status: "",
      message: "",
    };
  }

  return state;
};

export default threadReducer;
