import { Batch } from "../batch/Batch";
import { Route } from "../route/Route";
import { RouteRecipe } from "../routeRecipe/RouteRecipe";
import { Item } from "../item/Item";

export type ProductionOrder = {
  batches?: Array<Batch>;
  className: string;
  createdAt: Date;
  createdBy: string;
  editedAt: Date;
  editedBy: string;
  endDate: Date;
  firmed: boolean;
  id: string;
  released: boolean;
  route?: Route;
  routeRecipes?: Array<RouteRecipe>;
  schemaVersion: string;
  startDate: Date;
  state: string;
  wipItem?: Item;
};
