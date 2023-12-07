import { BatchCreateNestedManyWithoutRoutesInput } from "./BatchCreateNestedManyWithoutRoutesInput";
import { ProductionOrderCreateNestedManyWithoutRoutesInput } from "./ProductionOrderCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  batches?: BatchCreateNestedManyWithoutRoutesInput;
  productionOrder?: ProductionOrderCreateNestedManyWithoutRoutesInput;
  routeName: string;
  routeOperation: string;
  routeOperationStep: string;
  routeRevision: string;
};
