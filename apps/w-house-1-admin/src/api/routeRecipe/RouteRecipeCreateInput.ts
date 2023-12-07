import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";

export type RouteRecipeCreateInput = {
  operationStepId: string;
  operationStepName: string;
  productionOrder?: ProductionOrderWhereUniqueInput | null;
};
