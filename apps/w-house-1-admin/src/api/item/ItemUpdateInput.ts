import { BatchUpdateManyWithoutItemsInput } from "./BatchUpdateManyWithoutItemsInput";
import { ProductionOrderUpdateManyWithoutItemsInput } from "./ProductionOrderUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  batchClassActive?: boolean;
  batchClassDescription?: string;
  batchClassId?: string;
  batchClassName?: string;
  batchClassRevision?: string;
  batches?: BatchUpdateManyWithoutItemsInput;
  className?: string;
  createdAt?: Date;
  createdBy?: string;
  editedAt?: Date;
  editedBy?: string;
  productionOrderId?: string | null;
  productionOrders?: ProductionOrderUpdateManyWithoutItemsInput;
  schemaVersion?: string;
};
