import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/packages`;

type PackageData = {
  address: string;
  city?: string;
  client_name: string;
  weight: string;
  delivery_date: string;
  id?: number;
  driver_id?: null;
  status?: string;
};

// get all packages
export const getAllPackages = async () => {
  try {
    const response = await axios.get(`${API_URL}`, { withCredentials: true });
    let newArr = response.data.map((individualPackage: PackageData) => {
      const adressArr = individualPackage.address.split(",");
      individualPackage.address = adressArr[0];
      individualPackage.city = adressArr[1];
      return individualPackage;
    });
    return newArr;
  } catch (error) {
    console.error("Error al obtener todos los paquetes:", error);
    throw error;
  }
};

// get package by id
export const getPackageById = async ({ id }: PackageData) => {
  try {
    const response = await axios.get(`${API_URL}/single/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener el paquete:", error);
    throw error;
  }
};

//get package by status
export const getPackageByStatus = async ({ status }: PackageData) => {
  try {
    const response = await axios.get(`${API_URL}/status/${status}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener el paquete:", error);
    throw error;
  }
};

//get packages By driver
export const getPackagesByDriver = async ({ driver_id }: PackageData) => {
  try {
    const response = await axios.get(`${API_URL}/driver/${driver_id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los paquetes:", error);
    throw error;
  }
};

// create package
export const createPackage = async (packageData: PackageData) => {
  try {
    const response = await axios.post(`${API_URL}`, packageData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear un paquete:", error);
    throw error;
  }
};

// start delivery (put)
export const startDelivery = async () => {};

// change status (put)
export const changeStatus = async () => {};