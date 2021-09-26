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
  email: Yup.string().email().required("Invalid email address."),
  name: Yup.string().required(),
  surname: Yup.string().required(),
  date: Yup.date().required(),
});
