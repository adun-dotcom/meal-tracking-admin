import { useMutation } from "react-query";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { addEmployeeMutation, loginUserMutation } from "./mutation.def";
// @ts-ignore

const useLoginUserMutation = () => {
  return useMutation(loginUserMutation, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
};

const useAddEmployeeMutation = () => {
  return useMutation(addEmployeeMutation, {
    onSuccess: (data) => {},
    onError: (error) => {
      NotificationManager.error("An error occurred", "Error");
    },
  });
};
export { useLoginUserMutation, useAddEmployeeMutation };
