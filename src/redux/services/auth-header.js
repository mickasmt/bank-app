export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("bankToken"));
  // console.log(token);

  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
