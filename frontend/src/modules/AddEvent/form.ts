import * as Yup from "yup";

export interface AddEventFormValues {
  name: string;
  surname: string;
  email: string;
  date: Date;
}

export const addEventInitialValues: AddEventFormValues = {
  email: "",
  name: "",
  surname: "",
  date: "" as unknown as Date,
};

export const addEventValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  name: Yup.string().required("Name is required."),
  surname: Yup.string().required("Surname is required."),
  date: Yup.date().required("Date is required."),
});
