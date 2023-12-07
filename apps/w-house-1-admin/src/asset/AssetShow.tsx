import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "./AssetTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { PRODUCTIONORDER_TITLE_FIELD } from "../productionOrder/ProductionOrderTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";

export const AssetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Asset Description" source="assetDescription" />
        <TextField label="Asset Name" source="assetName" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Parent" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type" source="type" />
        <ReferenceManyField reference="Batch" target="assetId" label="Batches">
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
        </ReferenceManyField>
        <ReferenceManyField reference="Asset" target="parentId" label="Assets">
          <Datagrid rowClick="show">
            <TextField label="Asset Description" source="assetDescription" />
            <TextField label="Asset Name" source="assetName" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Parent" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type" source="type" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
