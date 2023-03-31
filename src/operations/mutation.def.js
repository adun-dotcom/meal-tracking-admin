import axios from "axios";
import { NotificationManager } from "react-notifications";

const restApi = "https://beertech-production.up.railway.app";
const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

export const loginUserMutation = async (userDetails) => {
  try {
    const response = await axios.post(`${restApi}/v1/auth/login`, userDetails);

    const data = await response;
    return data.data;
  } catch (error) {
    NotificationManager.error("An error occurred", "Error");
  }
};

export const addEmployeeMutation = async (userDetails) => {
  const response = await axios.post(
    `${restApi}/v1/user/add`,
    userDetails,
    config
  );
  try {
    if (response.status === 200) {
      console.log({ response });
    }

    return response;
  } catch (error) {
    NotificationManager.error(error, "Error");
  }
};

export const getEmployeesQuery = async (pageNumber) => {
  try {
    const response = await axios.get(
      `${restApi}/v1/user/all?pageNo=${pageNumber}`,
      config
    );

    return response.data.data;
  } catch (error) {
    NotificationManager.error(error, "Error");
  }
};

export const getHistoryQuery = async (pageNumber) => {
  try {
    const response = await axios.get(
      `${restApi}/v1/user/order_history?pageNo=${pageNumber}`,
      config
    );

    return response.data;
  } catch (error) {
    NotificationManager.error(error, "Error");
  }
};

export const generateBarcode = async () => {
  try {
    const response = await axios.get(`${restApi}/v1/auth/barcode`, config);

    return response;
  } catch (error) {
    NotificationManager.error(error, "Error");
  }
};
