import axios from "axios";
export const BASE_API = "https://node-server-app-3.onrender.com";
export const USERS_API = `${BASE_API}/api/users`;
const request = axios.create({
  withCredentials: true,
});
export const signin = async (credentials) => {
  console.log("signing in");
  const response = await request.post(`${USERS_API}/signin`, credentials);
  console.log(response);
  return response.data;
};
export const account = async () => {
  console.log("account");
  const response = await request.post(`${USERS_API}/account`);
  console.log(response);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const users = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};

export const deleteUser = async (user) => {
  const response = await request.delete(`${USERS_API}/${user._id}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};

export const signup = async (user) => {
  const response = await request.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};

export const findUsersByRole = async (role) => {
  const response = await request.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(`${USERS_API}`);
  return response.data;
};

// import axios from "axios";
// export const BASE_API = process.env.REACT_APP_BASE_API_URL;
// export const USERS_API = `${BASE_API}/api/users`;
// export const signin = async (credentials) => {
//   const response = await axios.post(`${USERS_API}/signin`, credentials);
//   return response.data;
// };

// export const account = async () => {
//   const response = await axios.post(`${USERS_API}/account`);
//   return response.data;
// };
