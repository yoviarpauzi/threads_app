const BASE_URL = "https://forum-api.dicoding.dev/v1";

const putAccessToken = (accessToken) => {
  return localStorage.setItem("accessToken", accessToken);
};

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

const removeAccessToken = () => {
  return localStorage.clear();
};

const register = async (userCredential) => {
  return await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCredential),
  }).then((response) => response.json());
};

const login = async (userCredential) => {
  return await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCredential),
  }).then((response) => response.json());
};

const getProfile = async () => {
  return await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
  }).then((response) => response.json());
};

export {
  putAccessToken,
  getAccessToken,
  removeAccessToken,
  register,
  login,
  getProfile,
};
