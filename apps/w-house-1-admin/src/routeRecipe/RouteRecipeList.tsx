import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCTIONORDER_TITLE_FIELD } from "../productionOrder/ProductionOrderTitle";

export const RouteRecipeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RouteRecipes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
