import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useRecoilState } from "recoil";
import { employeeDetailsState } from "../atoms";

const restApi = "https://beertech-production.up.railway.app";
const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

const fetchEmployeeData = async () => {
  const response = await axios.get(`${restApi}/v1/auth/login`, config);
  return response.data;
};

const useFetchEmployeeData = async () => {
  const [, setEmployeeState] = useRecoilState(employeeDetailsState);
  const { data } = useQuery("employeeData", fetchEmployeeData, {
    onSuccess: (data) => {
      setEmployeeState(data);
    },
  });
  console.log(data);
  return data;
};

export { useFetchEmployeeData };
