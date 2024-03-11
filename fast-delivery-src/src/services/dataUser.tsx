import axios from "axios";

type DataUserProps = {
  email: string;
};

export const dataUser = async () => {
  try {
    const response = await axios.get(`http://localhost:5001/api/hello-world`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async () => {
  try {
    const response = await axios.put(
      `http://localhost:5001/api/:id/forgot-password`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
