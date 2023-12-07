import { ProductionOrder } from "../productionOrder/ProductionOrder";

export type RouteRecipe = {
  id: string;
  operationStepId: string;
  operationStepName: string;
  productionOrder?: ProductionOrder | null;
};
