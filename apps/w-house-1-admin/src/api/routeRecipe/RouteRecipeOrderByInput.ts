import { SortOrder } from "../../util/SortOrder";

export type RouteRecipeOrderByInput = {
  id?: SortOrder;
  operationStepId?: SortOrder;
  operationStepName?: SortOrder;
  productionOrderId?: SortOrder;
};
