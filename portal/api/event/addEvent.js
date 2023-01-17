import axios from 'axios';
const url = 'http://localhost:8080';

const addEvent = async (query) => {
  try {
    const response = await axios.post(`${url}/feed/event`, query);

    if (response.status === 201) {
      return response.data
    }
  } catch (err) {
    return err.response.data
  }

};
export default addEvent;
