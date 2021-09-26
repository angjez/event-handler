import {
  Error,
  InputWrapper,
  StyledInput,
} from "@src/modules/AddEvent/Input/Input.components";
import { Field, FieldProps } from "formik";
import React, { FunctionComponent } from "react";

interface Props {
  fieldName: string;
  type?: string;
}

const Input: FunctionComponent<Props> = ({ fieldName, type }) => (
  <Field type={type} name={fieldName}>
    {({ field, meta }: FieldProps) => (
      <InputWrapper>
        <StyledInput {...field} placeholder={field.name} />
        {<Error>{meta.touched && meta.error ? meta.error : undefined}</Error>}
      </InputWrapper>
    )}
  </Field>
);

export default Input;
