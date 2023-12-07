import { Batch } from "../batch/Batch";
import { ProductionOrder } from "../productionOrder/ProductionOrder";

export type Route = {
  batches?: Array<Batch>;
  id: string;
  productionOrder?: Array<ProductionOrder>;
  routeName: string;
  routeOperation: string;
  routeOperationStep: string;
  routeRevision: string;
};
