import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

const dataLogout = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default dataLogout;
