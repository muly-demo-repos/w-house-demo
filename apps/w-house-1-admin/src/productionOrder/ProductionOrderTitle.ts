import { ProductionOrder as TProductionOrder } from "../api/productionOrder/ProductionOrder";

export const PRODUCTIONORDER_TITLE_FIELD = "className";

export const ProductionOrderTitle = (record: TProductionOrder): string => {
  return record.className?.toString() || String(record.id);
};
