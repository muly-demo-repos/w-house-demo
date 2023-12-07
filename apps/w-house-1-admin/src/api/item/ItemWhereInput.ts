import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { BatchListRelationFilter } from "../batch/BatchListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductionOrderListRelationFilter } from "../productionOrder/ProductionOrderListRelationFilter";

export type ItemWhereInput = {
  batchClassActive?: BooleanFilter;
  batchClassDescription?: StringFilter;
  batchClassId?: StringFilter;
  batchClassName?: StringFilter;
  batchClassRevision?: StringFilter;
  batches?: BatchListRelationFilter;
  className?: StringFilter;
  createdAt?: DateTimeFilter;
  createdBy?: StringFilter;
  editedAt?: DateTimeFilter;
  editedBy?: StringFilter;
  id?: StringFilter;
  productionOrderId?: StringNullableFilter;
  productionOrders?: ProductionOrderListRelationFilter;
  schemaVersion?: StringFilter;
};
