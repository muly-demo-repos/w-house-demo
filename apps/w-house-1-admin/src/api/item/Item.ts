import { Batch } from "../batch/Batch";
import { ProductionOrder } from "../productionOrder/ProductionOrder";

export type Item = {
  batchClassActive: boolean;
  batchClassDescription: string;
  batchClassId: string;
  batchClassName: string;
  batchClassRevision: string;
  batches?: Array<Batch>;
  className: string;
  createdAt: Date;
  createdBy: string;
  editedAt: Date;
  editedBy: string;
  id: string;
  productionOrderId: string | null;
  productionOrders?: Array<ProductionOrder>;
  schemaVersion: string;
};
