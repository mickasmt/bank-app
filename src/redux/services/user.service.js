import axios from "axios";
import authHeader from "./auth-header";

const baseUrl =
  process.env.REACT_APP_BASE_API_URL || "http://localhost:3001/api/v1";

  
/**
 * POST request for fetch user data with api
 */
const getUser = () => {
  return axios
    .post(baseUrl + "/user/profile", null, { headers: authHeader() })
    .then((response) => {
      if (response.data.body) {
        localStorage.setItem("bankUser", JSON.stringify({
          firstname: response.data.body.firstName,
          lastname: response.data.body.lastName,
        }));
      }
      return response.data;
    }).catch(err => console.log(err));
};
/**
 * PUT request for update user data with api
 * @param  {string} firstName firstname of the user
 * @param  {string} lastName lastname of the user
 */
const updateUserProfile = (firstName, lastName) => {
  return axios
    .put(baseUrl + "/user/profile", {
      firstName,
      lastName
    }, { headers: authHeader() })
    .then((response) => {
      localStorage.setItem("bankUser", JSON.stringify({
        firstname: response.data.body.firstName,
        lastname: response.data.body.lastName,
      }));
      return response.data;
    });
};

const userService = {
  getUser,
  updateUserProfile,
};

export default userService;
