import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error al verificar la autenticación:", error);
  }
};

type LoginUserProps = {
  email: string;
  password: string;
};

export const loginUser = async ({ email, password }: LoginUserProps) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { email, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
