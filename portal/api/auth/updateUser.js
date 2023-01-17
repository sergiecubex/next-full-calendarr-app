import axios from 'axios';
const url = 'http://localhost:8080';

const updateUser = async (query) => {
  try {
    const response = await axios.put(`${url}/auth/updateUser`, query);

    if (response.status === 201) {
      return response.data
    }
  } catch (err) {
    return err.response.data
  }

};
export default updateUser;
