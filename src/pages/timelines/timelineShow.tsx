import {
  DateField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const TimelineShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="year" />
        <TextField source="timeline" />
        <TextField source="duration" />
        <TextField source="details" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <DateField source="__v" />
        <TextField source="id" />
      </SimpleShowLayout>
    </Show>
  );
};

export default TimelineShow;
