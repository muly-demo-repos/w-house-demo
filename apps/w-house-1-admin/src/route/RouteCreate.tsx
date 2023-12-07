import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BatchTitle } from "../batch/BatchTitle";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="batches"
          reference="Batch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BatchTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productionOrder"
          reference="ProductionOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductionOrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="Route Name" source="routeName" />
        <TextInput label="Route Operation" source="routeOperation" />
        <TextInput label="Route Operation Step" source="routeOperationStep" />
        <TextInput label="Route Revision" source="routeRevision" />
      </SimpleForm>
    </Create>
  );
};
