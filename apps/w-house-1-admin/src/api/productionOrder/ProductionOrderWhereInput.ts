import { BatchListRelationFilter } from "../batch/BatchListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { RouteRecipeListRelationFilter } from "../routeRecipe/RouteRecipeListRelationFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type ProductionOrderWhereInput = {
  batches?: BatchListRelationFilter;
  className?: StringFilter;
  createdAt?: DateTimeFilter;
  createdBy?: StringFilter;
  editedAt?: DateTimeFilter;
  editedBy?: StringFilter;
  endDate?: DateTimeFilter;
  firmed?: BooleanFilter;
  id?: StringFilter;
  released?: BooleanFilter;
  route?: RouteWhereUniqueInput;
  routeRecipes?: RouteRecipeListRelationFilter;
  schemaVersion?: StringFilter;
  startDate?: DateTimeFilter;
  state?: StringFilter;
  wipItem?: ItemWhereUniqueInput;
};
