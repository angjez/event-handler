import { FormWrapper } from "@src/modules/AddEvent/AddEventFormContent.components";
import Button from "@src/modules/AddEvent/Button";
import { AddEventFormValues } from "@src/modules/AddEvent/form";
import Input from "@src/modules/AddEvent/Input";
import { Form, FormikProps } from "formik";
import React, { FunctionComponent } from "react";

type Props = FormikProps<AddEventFormValues>;

const AddEventFormContent: FunctionComponent<Props> = ({
  isValid,
  isSubmitting,
}) => (
  <FormWrapper>
    <Form>
      <Input fieldName="name" />
      <Input fieldName="surname" />
      <Input fieldName="email" type="email" />
      <Button type="submit" isLoading={isSubmitting} disabled={!isValid}>
        Submit
      </Button>
    </Form>
  </FormWrapper>
);

export default AddEventFormContent;
