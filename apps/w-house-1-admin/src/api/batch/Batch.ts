import { Asset } from "../asset/Asset";
import { Item } from "../item/Item";
import { ProductionOrder } from "../productionOrder/ProductionOrder";
import { Route } from "../route/Route";

export type Batch = {
  asset?: Asset;
  batchActualQty: number;
  batchClass: string;
  batchClassId: string;
  batchClassName: string;
  batchId: string;
  batchPlannedQty: number;
  batchUnits: string;
  id: string;
  item?: Item;
  productionOrder?: ProductionOrder;
  route?: Route;
  status?: "ACTIVE" | "INACTIVE" | "PENDING";
};
