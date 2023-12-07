import { BatchListRelationFilter } from "../batch/BatchListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductionOrderListRelationFilter } from "../productionOrder/ProductionOrderListRelationFilter";

export type RouteWhereInput = {
  batches?: BatchListRelationFilter;
  id?: StringFilter;
  productionOrder?: ProductionOrderListRelationFilter;
  routeName?: StringFilter;
  routeOperation?: StringFilter;
  routeOperationStep?: StringFilter;
  routeRevision?: StringFilter;
};
