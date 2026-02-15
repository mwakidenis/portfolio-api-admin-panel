import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  FunctionField,
  List,
  TextField,
  useRecordContext,
} from "react-admin";

const ProjectPanel = () => {
  const record = useRecordContext();
  return <div>{record?.details}</div>;
};

const TimelinesList = () => {
  return (
    <List>
      <Datagrid
        expand={ProjectPanel}
        sx={{
          ".RaDatagrid-headerCell": {
            padding: "16px",
            fontSize: "16px",
          },
        }}
      >
        <TextField source="year" />
        <TextField source="timeline" />
        <TextField source="duration" />
        <FunctionField
          label="Excerpt"
          render={(record) => `${record.details.substring(0, 30)}...`}
        />
        <TextField source="id" label="ID" />
        <EditButton label="Update Timeline" />
        <DeleteButton label="Delete Timeline" />
        <DateField source="createdAt" label="Creation Date" />
        <DateField source="updatedAt" label="Update Date" />
      </Datagrid>
    </List>
  );
};

export default TimelinesList;
