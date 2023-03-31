import React, { ReactNode, useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import ButtonComponent from "./button";
import { Grid, IconButton, Input } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAddEmployeeMutation } from "../operations/mutations";
import BusyOverlay from "./BusyOverlay";

const EmployeeDialogShell = ({
  actionButtonText,
  handleClose,
  loading,
  open,
  setOpen,
  refetch,
  maxWidth = "sm",
}) => {
  const { mutate, data, isLoading, isError } = useAddEmployeeMutation();

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter employee's name?"),
    gender: yup.string().required("Please enter employee's gender?"),
    department: yup.string().required("Please enter employee's department?"),

    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("What is your email address?"),
  });
  const defaultValues = {
    name: "",
    department: "",
    email: "",
    gender: "",
  };
  const [initialValues, setInitialValues] = useState(defaultValues);

  const { errors, touched, values, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema,
      enableReinitialize: true,
      onSubmit: async (values) => {
        mutate(values);
      },
    });

  useEffect(() => {
    if (data) {
      setOpen(false);
      refetch();
    }
  }, [data, open]);

  return (
    <div>
      <BusyOverlay loading={isLoading} />
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        maxWidth={maxWidth}
        fullWidth
        open={open}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="">Add Employee</h2>
          <span onClick={() => setOpen(false)}>
            <CloseIcon />
          </span>
        </div>

        <div className="border-t border-white w-full">
          <form onSubmit={handleSubmit} className="p-4">
            <div className="flex w-full justify-between space-x-5 mt-3">
              <div className="w-1/2">
                <label
                  for="name"
                  className="form-label font-medium text-sm text-left  text-gray-100"
                >
                  Employee Name
                </label>
                <div className="relative mt-2">
                  <input
                    type="text"
                    className="form-control
                  block
                  w-full
                  px-4
                  py-1.5
                  h-53
                  text-sm
                  text-dark-100
                  invalid:border-orange-400
                  bg-neutral-600 bg-clip-padding
                  border border-solid border-gray-700
                  rounded
                  transition
                  ease-in-out
                  shadow
                  m-0
                  focus:text-dark-100 focus:bg-white focus:border-orange-400 focus:outline-none placeholder:text-gray-200"
                    id="name"
                    onChange={handleChange}
                    value={values.name}
                    error={Boolean(errors.name)}
                    aria-describedby="name"
                    placeholder="Employee name"
                  />
                </div>
                <small id="email" className="block mt-1 text-sm text-red-600">
                  {errors.name}
                </small>
              </div>
              <div className="w-1/2 ">
                <label
                  for="email"
                  className="form-label font-medium text-sm text-left  text-gray-100"
                >
                  Email Address
                </label>
                <div className="relative mt-2">
                  <input
                    type="email"
                    className="form-control
                  block
                  w-full
                  px-4
                  py-1.5
                  h-53
                  text-sm
                  text-dark-100
                  invalid:border-orange-400
                    bg-neutral-600 bg-clip-padding
                  border border-solid border-gray-700
                  rounded
                  transition
                  ease-in-out
                  shadow-lg
                  m-0
                  focus:text-dark-100 focus:bg-white focus:border-orange-400 focus:outline-none placeholder:text-gray-200"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                    error={Boolean(errors.email)}
                    aria-describedby="email"
                    placeholder="name@gmail.com"
                  />
                </div>
                <small id="email" className="block mt-1 text-sm text-red-600">
                  {errors.email}
                </small>
              </div>
            </div>
            <div className="flex w-full justify-between mt-6 space-x-5">
              <div className="w-1/2">
                <label
                  for="department"
                  className="form-label font-medium text-sm text-left  text-gray-100"
                >
                  Employee department
                </label>
                <div className="relative mt-2">
                  <input
                    type="text"
                    className="form-control
                  block
                  w-full
                  px-4
                  py-1.5
                  h-53
                  text-sm
                  text-dark-100
                  invalid:border-orange-400
                    bg-neutral-600 bg-clip-padding
                  border border-solid border-gray-700
                  rounded
                  transition
                  ease-in-out
                  shadow-lg
                  m-0
                  focus:text-dark-100 focus:bg-white focus:border-orange-400 focus:outline-none placeholder:text-gray-200"
                    id="department"
                    onChange={handleChange}
                    value={values.department}
                    error={Boolean(errors.department)}
                    aria-describedby="department"
                    placeholder="Engineering"
                  />
                </div>
                <small
                  id="department"
                  className="block mt-1 text-sm text-red-600"
                >
                  {errors.department}
                </small>
              </div>
              <div className="w-1/2">
                <label
                  for="gender"
                  className="form-label font-medium text-sm text-left  text-gray-100"
                >
                  Gender
                </label>
                <div className="relative mt-2">
                  <input
                    type="text"
                    className="form-control
                  block
                  w-full
                  px-4
                  py-1.5
                  h-53
                  text-sm
                  text-dark-100
                  invalid:border-orange-400
                    bg-neutral-600 bg-clip-padding
                  border border-solid border-gray-700
                  rounded
                  transition
                  ease-in-out
                  shadow-lg
                  m-0
                  focus:text-dark-100 focus:bg-white focus:border-orange-400 focus:outline-none placeholder:text-gray-200"
                    id="gender"
                    onChange={handleChange}
                    value={values.gender}
                    error={Boolean(errors.gender)}
                    aria-describedby="gender"
                    placeholder="Female"
                  />
                </div>
                <small id="gender" className="block mt-1 text-sm text-red-600">
                  {errors.gender}
                </small>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <ButtonComponent
                btnText="Create profile"
                disabled={loading}
                //   callToAction={null}
              />
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default EmployeeDialogShell;
