import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { BatchTitle } from "../batch/BatchTitle";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Batch Class Active" source="batchClassActive" />
        <TextInput
          label="Batch Class Description"
          source="batchClassDescription"
        />
        <TextInput label="Batch Class Id" source="batchClassId" />
        <TextInput label="Batch Class Name" source="batchClassName" />
        <TextInput label="Batch Class Revision" source="batchClassRevision" />
        <ReferenceArrayInput
          source="batches"
          reference="Batch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BatchTitle} />
        </ReferenceArrayInput>
        <TextInput label="Class Name" source="className" />
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Created By" source="createdBy" />
        <DateTimeInput label="Edited At" source="editedAt" />
        <TextInput label="Edited By" source="editedBy" />
        <TextInput label="Production Order Id" source="productionOrderId" />
        <ReferenceArrayInput
          source="productionOrders"
          reference="ProductionOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionOrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="Schema Version" source="schemaVersion" />
      </SimpleForm>
    </Edit>
  );
};
