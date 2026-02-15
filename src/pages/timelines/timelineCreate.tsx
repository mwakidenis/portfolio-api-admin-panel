import { Create, SimpleForm, TextInput } from "react-admin";

const TimelineCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="year" />
        <TextInput source="timeline" />
        <TextInput source="duration" />
        <TextInput source="details" />
      </SimpleForm>
    </Create>
  );
};

export default TimelineCreate;
