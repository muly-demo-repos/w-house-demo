import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASSET_TITLE_FIELD } from "./AssetTitle";

export const AssetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Assets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Asset Description" source="assetDescription" />
        <TextField label="Asset Name" source="assetName" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Parent" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type" source="type" />
      </Datagrid>
    </List>
  );
};
