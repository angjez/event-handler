import { useAddEventMutation } from "@src/generated/schema";
import AddEventFormContent from "@src/modules/AddEvent/AddEventFormContent";
import {
  AddEventFormValues,
  addEventInitialValues,
  addEventValidationSchema,
} from "@src/modules/AddEvent/form";
import { Formik } from "formik";
import React, { FunctionComponent, useCallback } from "react";

const AddEventForm: FunctionComponent = () => {
  const [addEvent] = useAddEventMutation({
    fetchPolicy: "no-cache",
  });

  const handleSubmit = useCallback(
    async (values: AddEventFormValues) => {
      try {
        const { data } = await addEvent({
          variables: {
            input: { ...values, date: values.date.toString() },
          },
        });
        switch (data?.addEvent.__typename) {
          case "EventSuccessfulAddedResponse":
            // todo: show toast
            return;
        }
      } catch (e) {
        // todo: show toast
      }
    },
    [addEvent],
  );

  return (
    <Formik
      initialValues={addEventInitialValues}
      validationSchema={addEventValidationSchema}
      onSubmit={handleSubmit}
    >
      {(formProps) => <AddEventFormContent {...formProps} />}
    </Formik>
  );
};

export default AddEventForm;
