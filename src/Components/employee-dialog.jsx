import React, { ReactNode, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import ButtonComponent from "./button";
import { Grid, IconButton, Input } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

const EmployeeDialogShell = ({
  actionButtonText,
  handleClose,
  loading,
  open,
  setOpen,
  maxWidth = "sm",
}) => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("What is your first name?"),
    lastName: yup.string().required("What is your last name?"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("What is your email address?"),
    phoneNumber: yup.string().required("What is your phone number?"),
    password: yup
      .string()
      .min(8, "Please enter a password that is longer than 8 characters")
      .required("Please enter your password"),
    accountType: yup.string().required("Please select your account type"),
  });
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    accountType: "",
    source: "",
    businessName: "",
    logo: "",
  };
  const [initialValues, setInitialValues] = useState(defaultValues);

  const { errors, touched, values, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema,
      enableReinitialize: true,
      onSubmit: async (values) => {},
    });
  return (
    <div>
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
          <form onSubmit={(e) => e.preventDefault()} className="p-4">
            <div className="flex w-full justify-between space-x-5 mt-3">
              <div className="w-1/2">
                <label
                  for="email"
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
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                    error={Boolean(errors.email)}
                    aria-describedby="email"
                    placeholder="name@gmail.com"
                  />
                </div>
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
              </div>
            </div>
            <div className="flex w-full justify-between mt-6 space-x-5">
              <div className="w-1/2">
                <label
                  for="email"
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
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                    error={Boolean(errors.email)}
                    aria-describedby="email"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label
                  for="email"
                  className="form-label font-medium text-sm text-left  text-gray-100"
                >
                  Gender
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
