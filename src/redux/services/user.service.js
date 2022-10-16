import axios from "axios";
import authHeader from "./auth-header";

const baseUrl =
  process.env.REACT_APP_BASE_API_URL || "http://localhost:3001/api/v1";

const getUser = () => {
  return axios
    .post(baseUrl + "/user/profile", { headers: authHeader() })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

const updateUserProfile = ({ firstName, lastName }) => {
  return axios
    .post(baseUrl + "/user/profile", {
      firstName,
      lastName,
    }, { headers: authHeader() })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

const authService = {
  getUser,
  updateUserProfile,
};

export default authService;
