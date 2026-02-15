import {
  ArrayInput,
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const ProjectCreate = () => {
  return (
    <Create>
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
      </SimpleForm>
    </Create>
  );
};

export default ProjectCreate;
