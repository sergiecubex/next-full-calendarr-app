import axios from "axios";
const url = "http://localhost:8080";

const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/auth/users`);

    if (response.status === 200) {
      return response.data
    }
  } catch (err) {
    return err.response.data
  }
};
export default getUsers;