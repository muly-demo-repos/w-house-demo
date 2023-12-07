import { BatchUpdateManyWithoutRoutesInput } from "./BatchUpdateManyWithoutRoutesInput";
import { ProductionOrderUpdateManyWithoutRoutesInput } from "./ProductionOrderUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  batches?: BatchUpdateManyWithoutRoutesInput;
  productionOrder?: ProductionOrderUpdateManyWithoutRoutesInput;
  routeName?: string;
  routeOperation?: string;
  routeOperationStep?: string;
  routeRevision?: string;
};
