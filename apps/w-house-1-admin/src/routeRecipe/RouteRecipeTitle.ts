import { RouteRecipe as TRouteRecipe } from "../api/routeRecipe/RouteRecipe";

export const ROUTERECIPE_TITLE_FIELD = "operationStepName";

export const RouteRecipeTitle = (record: TRouteRecipe): string => {
  return record.operationStepName?.toString() || String(record.id);
};
