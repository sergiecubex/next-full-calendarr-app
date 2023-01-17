import axios from "axios";
const url = "http://localhost:8080"

const login = async (query) => {
  try {
    const response = await axios.post(`${url}/auth/login`, query);

    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.user);
      return response.data
    }
  } catch (err) {
    return err.response.data
  }
};
export default login;
