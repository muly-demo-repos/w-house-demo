import { BatchCreateNestedManyWithoutProductionOrdersInput } from "./BatchCreateNestedManyWithoutProductionOrdersInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { RouteRecipeCreateNestedManyWithoutProductionOrdersInput } from "./RouteRecipeCreateNestedManyWithoutProductionOrdersInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type ProductionOrderCreateInput = {
  batches?: BatchCreateNestedManyWithoutProductionOrdersInput;
  className: string;
  createdAt: Date;
  createdBy: string;
  editedAt: Date;
  editedBy: string;
  endDate: Date;
  firmed: boolean;
  released: boolean;
  route: RouteWhereUniqueInput;
  routeRecipes?: RouteRecipeCreateNestedManyWithoutProductionOrdersInput;
  schemaVersion: string;
  startDate: Date;
  state: string;
  wipItem: ItemWhereUniqueInput;
};
