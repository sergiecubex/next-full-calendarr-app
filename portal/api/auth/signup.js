import axios from 'axios';
const url = 'http://localhost:8080';

const signup = async (query) => {
  try {
    const response = await axios.put(`${url}/auth/signup`, query);

    if (response.status === 201) {
      return response.data
    }
  } catch (err) {
    return err.response.data
  }

};
export default signup;
