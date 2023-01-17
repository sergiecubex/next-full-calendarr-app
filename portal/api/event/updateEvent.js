import axios from 'axios';
const url = 'http://localhost:8080';

const updateEvent = async (query) => {
  try {
    const eventId = query._id;
    const response = await axios.put(`${url}/feed/event/${eventId}`, query);

    if (response.status === 201) {
      return response.data
    }
  } catch (err) {
    return err.response.data
  }

};
export default updateEvent;
