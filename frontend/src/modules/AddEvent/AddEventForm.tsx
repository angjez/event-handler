import completed from "@src/common/assets/completed.json";
import failed from "@src/common/assets/failed.json";
import { useAddEventMutation } from "@src/generated/schema";
import AddEventFormContent from "@src/modules/AddEvent/AddEventFormContent";
import {
  Message,
  MessageText,
} from "@src/modules/AddEvent/AddEventFormContent.components";
import {
  AddEventFormValues,
  addEventInitialValues,
  addEventValidationSchema,
} from "@src/modules/AddEvent/form";
import { Formik } from "formik";
import React, { FunctionComponent, useCallback, useState } from "react";
import Lottie from "react-lottie";

const AddEventForm: FunctionComponent = () => {
  const [addEvent] = useAddEventMutation({
    fetchPolicy: "no-cache",
  });
  const [message, setMessage] = useState<{
    message: string;
    successful: boolean;
  } | null>(null);

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
            setMessage({ message: data.addEvent.message, successful: true });
            return;
        }
      } catch (e) {
        setMessage({
          message:
            "An error occured. Please check provided data and try again.",
          successful: false,
        });
      }
    },
    [addEvent],
  );

  return (
    <>
      {message ? (
        <Message data-cy="message">
          <MessageText>{message.message}</MessageText>
          <Lottie
            eventListeners={[
              {
                eventName: "complete",
                callback: () => {
                  setTimeout(() => {
                    setMessage(null);
                  }, 2000);
                },
              },
            ]}
            options={{
              loop: false,
              autoplay: true,
              animationData: message.successful ? completed : failed,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={200}
            width={200}
          />
        </Message>
      ) : (
        <Formik
          initialValues={addEventInitialValues}
          validationSchema={addEventValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formProps) => <AddEventFormContent {...formProps} />}
        </Formik>
      )}
    </>
  );
};

export default AddEventForm;
