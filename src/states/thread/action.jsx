import { hideLoading, showLoading } from "react-redux-loading-bar";
import {
  createThread,
  downVoteThread,
  upVoteThread,
} from "../../utils/network-data";

const createThreadActionCreator = (action) => {
  return {
    type: "THREAD_CREATE",
    payload: action,
  };
};

const upVoteThreadActionCreator = (action) => {
  return {
    type: "THREAD_UPVOTE",
    payload: action,
  };
};

const downVoteThreadActionCreator = (action) => {
  return {
    type: "THREAD_DOWNVOTE",
    payload: action,
  };
};

const threadResetState = (action) => {
  return {
    type: "THREAD_RESET",
    payload: action,
  };
};

const asyncCreateThread = (title, body, category) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await createThread({ title, body, category });
      dispatch(createThreadActionCreator(response));
    } catch (e) {
      dispatch(
        createThreadActionCreator({
          data: {},
          status: "fail",
          message: e.message,
        })
      );
    }
    dispatch(hideLoading());
  };
};

const asyncUpVoteThread = (threadId) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await upVoteThread(threadId);
      dispatch(upVoteThreadActionCreator(response));
    } catch (e) {
      dispatch(
        upVoteThreadActionCreator({
          data: {},
          status: "fail",
          message: e.message,
        })
      );
    }
    dispatch(hideLoading());
  };
};

const asyncDownVoteThread = (threadId) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await downVoteThread(threadId);
      dispatch(downVoteThreadActionCreator(response));
    } catch (e) {
      dispatch(
        downVoteThreadActionCreator({
          data: {},
          status: "fail",
          message: e.message,
        })
      );
    }
    dispatch(hideLoading());
  };
};

export {
  createThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  threadResetState,
  asyncCreateThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
};
