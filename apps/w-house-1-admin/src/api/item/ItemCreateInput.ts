import { BatchCreateNestedManyWithoutItemsInput } from "./BatchCreateNestedManyWithoutItemsInput";
import { ProductionOrderCreateNestedManyWithoutItemsInput } from "./ProductionOrderCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  batchClassActive: boolean;
  batchClassDescription: string;
  batchClassId: string;
  batchClassName: string;
  batchClassRevision: string;
  batches?: BatchCreateNestedManyWithoutItemsInput;
  className: string;
  createdAt: Date;
  createdBy: string;
  editedAt: Date;
  editedBy: string;
  productionOrderId?: string | null;
  productionOrders?: ProductionOrderCreateNestedManyWithoutItemsInput;
  schemaVersion: string;
};
