import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RouteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Routes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Route Name" source="routeName" />
        <TextField label="Route Operation" source="routeOperation" />
        <TextField label="Route Operation Step" source="routeOperationStep" />
        <TextField label="Route Revision" source="routeRevision" />
      </Datagrid>
    </List>
  );
};
