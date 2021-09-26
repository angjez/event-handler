import { Header, Panel } from "@src/modules/AddEvent/AddEvent.components";
import AddEventForm from "@src/modules/AddEvent/AddEventForm";
import React, { FunctionComponent } from "react";

const AddEvent: FunctionComponent = () => (
  <Panel>
    <Header>Add an event</Header>
    <AddEventForm />
  </Panel>
);

export default AddEvent;
