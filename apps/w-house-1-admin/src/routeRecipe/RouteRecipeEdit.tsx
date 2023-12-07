import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductionOrderTitle } from "../productionOrder/ProductionOrderTitle";

export const RouteRecipeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
