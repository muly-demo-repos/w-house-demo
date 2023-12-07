import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Items"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Batch Class Active" source="batchClassActive" />
        <TextField
          label="Batch Class Description"
          source="batchClassDescription"
        />
        <TextField label="Batch Class Id" source="batchClassId" />
        <TextField label="Batch Class Name" source="batchClassName" />
        <TextField label="Batch Class Revision" source="batchClassRevision" />
        <TextField label="Class Name" source="className" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Created By" source="createdBy" />
        <TextField label="Edited At" source="editedAt" />
        <TextField label="Edited By" source="editedBy" />
        <TextField label="ID" source="id" />
        <TextField label="Production Order Id" source="productionOrderId" />
        <TextField label="Schema Version" source="schemaVersion" />
      </Datagrid>
    </List>
  );
};
