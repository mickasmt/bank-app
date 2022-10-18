/**
 * Get token in localstorage & return header authorization
 */
export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("bankToken"));

  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
