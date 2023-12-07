import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { ItemTitle } from "../item/ItemTitle";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";
import { RouteTitle } from "../route/RouteTitle";

export const BatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <NumberInput label="Batch Actual Qty" source="batchActualQty" />
        <TextInput label="Batch Class" source="batchClass" />
        <TextInput label="Batch Class Id" source="batchClassId" />
        <TextInput label="Batch Class Name" source="batchClassName" />
        <TextInput label="Batch Id" source="batchId" />
        <NumberInput label="Batch Planned Qty" source="batchPlannedQty" />
        <TextInput label="Batch Units" source="batchUnits" />
        <ReferenceInput source="item.id" reference="Item" label="Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productionOrder.id"
          reference="ProductionOrder"
          label="Production Order"
        >
          <SelectInput optionText={ProductionOrderTitle} />
        </ReferenceInput>
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "ACTIVE", value: "ACTIVE" },
            { label: "INACTIVE", value: "INACTIVE" },
            { label: "PENDING", value: "PENDING" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
