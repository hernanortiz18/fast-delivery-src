import axios from "axios";

type DataUserProps = {
  email: string
}

export const dataUser = async () => {
  try {  
    const response = await axios.get(
      `http://localhost:5001/api/hello-world`,
      { withCredentials: true }
    );
    return response.data
  } catch (error) { 
    throw error;
  }
};