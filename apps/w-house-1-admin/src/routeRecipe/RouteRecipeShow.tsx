import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { PRODUCTIONORDER_TITLE_FIELD } from "../productionOrder/ProductionOrderTitle";

export const RouteRecipeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Operation Step Id" source="operationStepId" />
        <TextField label="Operation Step Name" source="operationStepName" />
        <ReferenceField
          label="Production Order"
          source="productionorder.id"
          reference="ProductionOrder"
        >
          <TextField source={PRODUCTIONORDER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
