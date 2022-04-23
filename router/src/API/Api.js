import axios from "axios";
export const userLogin = ({ email, password }) => {
  const response = axios.post(`${process.env.REACT_APP_API_URL}auth/login`, {
    email,
    password,
  });
  return response;
};

export const getMe = () => {
  const { data } = axios.get(`${process.env.REACT_APP_API_URL}auth/me`);
  return data;
};
