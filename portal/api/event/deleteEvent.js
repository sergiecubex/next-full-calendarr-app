import axios from 'axios';
const url = 'http://localhost:8080';

const deleteEvent = async (query) => {
  try {
    const eventId = query._id;
    const response = await axios.delete(`${url}/feed/event/${eventId}`);

    if (response.status === 201) {
      return response.data
    }
  } catch (err) {
    return err.response.data
  }

};
export default deleteEvent;
