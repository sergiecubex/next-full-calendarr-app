import axios from 'axios';
const url = 'http://localhost:8080';

const deleteUser = async (query) => {
  try {
    const userId = query._id;
    const response = await axios.delete(`${url}/auth/users/${userId}`);

    if (response.status === 201) {
      return response.data
    }
  } catch (err) {
    return err.response.data
  }

};
export default deleteUser;
