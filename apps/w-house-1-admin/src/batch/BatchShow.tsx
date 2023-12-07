import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { PRODUCTIONORDER_TITLE_FIELD } from "../productionOrder/ProductionOrderTitle";
import { ROUTE_TITLE_FIELD } from "../route/RouteTitle";

export const BatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
