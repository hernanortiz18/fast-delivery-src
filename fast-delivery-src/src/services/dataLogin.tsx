import axios from "axios";

type LoginUserProps = {
  email: string
  password: string
}

export const loginUser = async ({email, password}: LoginUserProps) => {
  try {  
    const response = await axios.post(
      `http://localhost:5001/api/users/login`,
      { email, password },
      { withCredentials: true }
    );
    return response.data.payload;
  } catch (error) { 
    throw error;
  }
};