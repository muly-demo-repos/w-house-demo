import { BatchUpdateManyWithoutProductionOrdersInput } from "./BatchUpdateManyWithoutProductionOrdersInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { RouteRecipeUpdateManyWithoutProductionOrdersInput } from "./RouteRecipeUpdateManyWithoutProductionOrdersInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type ProductionOrderUpdateInput = {
  batches?: BatchUpdateManyWithoutProductionOrdersInput;
  className?: string;
  createdAt?: Date;
  createdBy?: string;
  editedAt?: Date;
  editedBy?: string;
  endDate?: Date;
  firmed?: boolean;
  released?: boolean;
  route?: RouteWhereUniqueInput;
  routeRecipes?: RouteRecipeUpdateManyWithoutProductionOrdersInput;
  schemaVersion?: string;
  startDate?: Date;
  state?: string;
  wipItem?: ItemWhereUniqueInput;
};
