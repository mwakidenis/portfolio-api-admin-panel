import {
  ArrayInput,
  DateInput,
  Edit,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const ProjectEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="description" multiline />
        <ArrayInput source="tags">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="images">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput source="liveUrl" />
        <TextInput source="sourceUrl" />
        <DateInput source="createdAt" />
        <DateInput source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default ProjectEdit;
