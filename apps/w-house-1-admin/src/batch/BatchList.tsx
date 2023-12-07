import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { PRODUCTIONORDER_TITLE_FIELD } from "../productionOrder/ProductionOrderTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";

export const BatchList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Batches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Batch Actual Qty" source="batchActualQty" />
        <TextField label="Batch Class" source="batchClass" />
        <TextField label="Batch Class Id" source="batchClassId" />
        <TextField label="Batch Class Name" source="batchClassName" />
        <TextField label="Batch Id" source="batchId" />
        <TextField label="Batch Planned Qty" source="batchPlannedQty" />
        <TextField label="Batch Units" source="batchUnits" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Item" source="item.id" reference="Item">
          <TextField source={ITEM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Production Order"
          source="productionorder.id"
          reference="ProductionOrder"
        >
          <TextField source={PRODUCTIONORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Route" source="route.id" reference="Route">
          <TextField source={ROUTE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
      </Datagrid>
    </List>
  );
};
