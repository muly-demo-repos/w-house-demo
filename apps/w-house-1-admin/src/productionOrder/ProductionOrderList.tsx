import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";

export const ProductionOrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProductionOrders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Class Name" source="className" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Created By" source="createdBy" />
        <TextField label="Edited At" source="editedAt" />
        <TextField label="Edited By" source="editedBy" />
        <TextField label="End Date" source="endDate" />
        <BooleanField label="Firmed" source="firmed" />
        <TextField label="ID" source="id" />
        <BooleanField label="Released" source="released" />
        <ReferenceField label="Route" source="route.id" reference="Route">
          <TextField source={ROUTE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Schema Version" source="schemaVersion" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="State" source="state" />
        <ReferenceField label="Wip Item" source="item.id" reference="Item">
          <TextField source={ITEM_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
