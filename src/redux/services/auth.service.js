import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_API_URL || "http://localhost:3001/api/v1";

/**
 * POST request for login user with api
 * @param  {string} email
 * @param  {string} password
 */
const login = (email, password) => {
  return axios
    .post(baseUrl + "/user/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.body.token) {
        localStorage.setItem("bankToken", JSON.stringify(response.data.body.token));
      }

      return response.data;
    });
};

/**
 * Remove user in localstorage for logout
 */
const logout = () => {
  localStorage.removeItem("bankUser");
  localStorage.removeItem("bankToken");
};

const authService = {
  login,
  logout,
};

export default authService;
