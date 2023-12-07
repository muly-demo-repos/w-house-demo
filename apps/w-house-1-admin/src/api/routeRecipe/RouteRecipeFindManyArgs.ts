import { RouteRecipeWhereInput } from "./RouteRecipeWhereInput";
import { RouteRecipeOrderByInput } from "./RouteRecipeOrderByInput";

export type RouteRecipeFindManyArgs = {
  where?: RouteRecipeWhereInput;
  orderBy?: Array<RouteRecipeOrderByInput>;
  skip?: number;
  take?: number;
};
