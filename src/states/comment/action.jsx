import { hideLoading, showLoading } from "react-redux-loading-bar";
import {
  createComment,
  downVoteComment,
  upVoteComment,
} from "../../utils/network-data";

const createCommentActionCreator = (action) => {
  return {
    type: "COMMENT_CREATE",
    payload: action,
  };
};

const upVoteCommentActionCreator = (action) => {
  return {
    type: "COMMENT_UPVOTE",
    payload: action,
  };
};

const downVoteCommentActionCreator = (action) => {
  return {
    type: "COMMENT_DOWNVOTE",
    payload: action,
  };
};

const commentResetState = (action) => {
  return {
    type: "COMMENT_RESET",
    payload: action,
  };
};

const asyncCreateComment = (threadId, comment) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await createComment(threadId, comment);
      dispatch(createCommentActionCreator(response));
    } catch (e) {
      dispatch(
        createCommentActionCreator({
          data: {},
          status: "",
          message: "",
        })
      );
    }
    dispatch(hideLoading());
  };
};

const asyncUpVoteComment = (threadId, commentId) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await upVoteComment(threadId, commentId);
      dispatch(upVoteCommentActionCreator(response));
    } catch (e) {
      dispatch(
        upVoteCommentActionCreator({
          data: {},
          status: "",
          message: "",
        })
      );
    }
    dispatch(hideLoading());
  };
};

const asyncDownVoteComment = (threadId, commentId) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await downVoteComment(threadId, commentId);
      dispatch(downVoteCommentActionCreator(response));
    } catch (e) {
      dispatch(
        downVoteCommentActionCreator({
          data: {},
          status: "",
          message: "",
        })
      );
    }
    dispatch(hideLoading());
  };
};

export {
  createCommentActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  commentResetState,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
};
