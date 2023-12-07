import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type BatchWhereInput = {
  asset?: AssetWhereUniqueInput;
  batchActualQty?: FloatFilter;
  batchClass?: StringFilter;
  batchClassId?: StringFilter;
  batchClassName?: StringFilter;
  batchId?: StringFilter;
  batchPlannedQty?: FloatFilter;
  batchUnits?: StringFilter;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  productionOrder?: ProductionOrderWhereUniqueInput;
  route?: RouteWhereUniqueInput;
  status?: "ACTIVE" | "INACTIVE" | "PENDING";
};
