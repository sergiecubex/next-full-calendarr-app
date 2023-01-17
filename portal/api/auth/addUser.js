import axios from 'axios';
const url = 'http://localhost:8080';

const addUser = async (query) => {
  try {
    const response = await axios.put(`${url}/auth/addUser`, query);

    if (response.status === 201) {
      return response.data
    }
  } catch (err) {
    return err.response.data
  }

};
export default addUser;
