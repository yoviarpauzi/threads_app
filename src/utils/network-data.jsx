const BASE_URL = "https://forum-api.dicoding.dev/v1";

const headers = {
  "Content-Type": "application/json",
};

const putAccessToken = (accessToken) =>
  localStorage.setItem("accessToken", accessToken);

const getAccessToken = () => localStorage.getItem("accessToken");

const removeAccessToken = () => localStorage.clear();

const fetchWithAuth = async (url, options) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }
  const response = await fetch(url, options);
  return response.json();
};

const register = async (userCredential) => {
  return await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers,
    body: JSON.stringify(userCredential),
  });
};

const login = async (userCredential) => {
  return await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers,
    body: JSON.stringify(userCredential),
  });
};

const getProfile = async () => {
  return await fetchWithAuth(`${BASE_URL}/users/me`, {
    method: "GET",
    headers,
  });
};

const getLeaderboard = async () => {
  return await fetch(`${BASE_URL}/leaderboards`, {
    method: "GET",
    headers,
  });
};

const createThread = async (thread) => {
  return await fetchWithAuth(`${BASE_URL}/threads`, {
    method: "POST",
    headers,
    body: JSON.stringify(thread),
  });
};

const getAllThread = async (threadID) => {
  return await fetch(`${BASE_URL}/threads/${threadID}`, {
    method: "POST",
    headers,
  });
};

const getDetailThread = async (threadId) => {
  return await fetch(`${BASE_URL}/threads/${threadId}`, {
    method: "GET",
    headers,
  });
};

const upVoteThread = async (threadId) => {
  return await fetchWithAuth(`${BASE_URL}/threads/${threadId}/up-vote`, {
    method: "POST",
    headers,
  });
};

const downVoteThread = async (threadId) => {
  return await fetchWithAuth(`${BASE_URL}/threads/${threadId}/down-vote`, {
    method: "POST",
    headers,
  });
};

const createComment = async (threadId, comment) => {
  return await fetchWithAuth(`${BASE_URL}/${threadId}/comments`, {
    method: "POST",
    headers,
    body: JSON.stringify(comment),
  });
};

const upVoteComment = async (threadId, commentId) => {
  return await fetchWithAuth(
    `${BASE_URL}/${threadId}/comments/${commentId}/up-vote`,
    {
      method: "POST",
      headers,
    }
  );
};

const downVoteComment = async (threadId, commentId) => {
  return await fetchWithAuth(
    `${BASE_URL}/${threadId}/comments/${commentId}/down-vote`,
    {
      method: "POST",
      headers,
    }
  );
};

export {
  putAccessToken,
  getAccessToken,
  removeAccessToken,
  register,
  login,
  getProfile,
  getLeaderboard,
  createThread,
  getAllThread,
  getDetailThread,
  upVoteThread,
  downVoteThread,
  createComment,
  upVoteComment,
  downVoteComment,
};
