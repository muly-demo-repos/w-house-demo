import { StringFilter } from "../../util/StringFilter";
import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";

export type RouteRecipeWhereInput = {
  id?: StringFilter;
  operationStepId?: StringFilter;
  operationStepName?: StringFilter;
  productionOrder?: ProductionOrderWhereUniqueInput;
};
