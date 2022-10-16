import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_API_URL || "http://localhost:3001/api/v1";

const login = (email, password) => {
  return axios
    .post(baseUrl + "/user/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
