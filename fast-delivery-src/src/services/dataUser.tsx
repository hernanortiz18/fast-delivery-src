import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

type DataUserProps = {
  id: number;
  email: string;
};

//get all users
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
};

//get user by id
export const getUserById = async ({ id }: DataUserProps) => {
  try {
    const response = await axios.get(`${API_URL}/single/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    throw error;
  }
};

//get user info
export const getUserinfo = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener la informacion del usuario:", error);
    throw error;
  }
};

// delete user by id
export const deleteUserById = async ({ id }: DataUserProps) => {
  try {
    await axios.delete(`${API_URL}/${id}`, { withCredentials: true });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw error;
  }
};

//change password
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
