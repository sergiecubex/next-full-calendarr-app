import axios from "axios";
const url = "http://localhost:8080";

const login = async (query) => {
  try {
    const eventId = query._id;
    const response = await axios.get(`${url}/feed/event/${eventId}`, query);

    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    return err.response.data;
  }
};
export default login;
