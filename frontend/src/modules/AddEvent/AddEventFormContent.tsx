import {
  FormWrapper,
  StyledTextField,
  StyledTextFieldWrapper,
} from "@src/modules/AddEvent/AddEventFormContent.components";
import Button from "@src/modules/AddEvent/Button";
import { AddEventFormValues } from "@src/modules/AddEvent/form";
import Input from "@src/modules/AddEvent/Inputs";
import { Form, FormikProps } from "formik";
import React, { FunctionComponent } from "react";

type Props = FormikProps<AddEventFormValues>;

const AddEventFormContent: FunctionComponent<Props> = ({
  values,
  isValid,
  isSubmitting,
  setFieldValue,
}) => (
  <FormWrapper>
    <Form>
      <Input fieldName="name" />
      <Input fieldName="surname" />
      <Input fieldName="email" type="email" />
      <StyledTextFieldWrapper>
        <StyledTextField
          id="datetime-local"
          label="Event date"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          value={values.date}
          onChange={(v) => setFieldValue("date", v.currentTarget.value)}
        />
      </StyledTextFieldWrapper>
      <Button type="submit" isLoading={isSubmitting} disabled={!isValid}>
        Submit
      </Button>
    </Form>
  </FormWrapper>
);

export default AddEventFormContent;
