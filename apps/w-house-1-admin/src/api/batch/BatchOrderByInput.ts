import { SortOrder } from "../../util/SortOrder";

export type BatchOrderByInput = {
  assetId?: SortOrder;
  batchActualQty?: SortOrder;
  batchClass?: SortOrder;
  batchClassId?: SortOrder;
  batchClassName?: SortOrder;
  batchId?: SortOrder;
  batchPlannedQty?: SortOrder;
  batchUnits?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  productionOrderId?: SortOrder;
  routeId?: SortOrder;
  status?: SortOrder;
};
