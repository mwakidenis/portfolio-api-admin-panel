import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  FunctionField,
  List,
  TextField,
  TextInput,
  useRecordContext,
} from "react-admin";

import ImageGalleryField from "../../components/ImageGalleryField";
import MyUrlField from "../../components/MyUrlField";
import TagsField from "../../components/TagsField";

const ProjectPanel = () => {
  const record = useRecordContext();
  return <div>{record?.description}</div>;
};

const ProjectsList = () => {
  const projectsFilters = [<TextInput source="q" label="Search" alwaysOn />];

  return (
    <List filters={projectsFilters}>
      <Datagrid
        expand={ProjectPanel}
        sx={{
          ".RaDatagrid-headerCell": {
            padding: "16px",
            fontSize: "16px",
          },
        }}
      >
        <TextField source="title" />
        <FunctionField
          label="Excerpt"
          render={(record) => `${record.description.substring(0, 30)}...`}
        />
        <TagsField source="tags" label="Tech Stack" />
        <MyUrlField source="liveUrl" content="Live" label="Live Website" />
        <MyUrlField source="sourceUrl" content="Code" label="Source Code" />
        <ImageGalleryField source="images" label="Images" />
        <TextField source="id" label="ID" />
        <EditButton label="Update Project" />
        <DeleteButton label="Delete Project" />
        <DateField source="createdAt" label="Creation Date" />
        <DateField source="updatedAt" label="Update Date" />
      </Datagrid>
    </List>
  );
};

export default ProjectsList;
