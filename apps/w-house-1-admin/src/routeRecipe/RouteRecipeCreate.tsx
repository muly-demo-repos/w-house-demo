import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";

export const RouteRecipeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Operation Step Id" source="operationStepId" />
        <TextInput label="Operation Step Name" source="operationStepName" />
        <ReferenceInput
          source="productionOrder.id"
          reference="ProductionOrder"
          label="Production Order"
        >
          <SelectInput optionText={ProductionOrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
