import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";

export type RouteRecipeUpdateInput = {
  operationStepId?: string;
  operationStepName?: string;
  productionOrder?: ProductionOrderWhereUniqueInput | null;
};
