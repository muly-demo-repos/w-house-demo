import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ProductionOrderWhereUniqueInput } from "../productionOrder/ProductionOrderWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type BatchCreateInput = {
  asset: AssetWhereUniqueInput;
  batchActualQty: number;
  batchClass: string;
  batchClassId: string;
  batchClassName: string;
  batchId: string;
  batchPlannedQty: number;
  batchUnits: string;
  item: ItemWhereUniqueInput;
  productionOrder: ProductionOrderWhereUniqueInput;
  route: RouteWhereUniqueInput;
  status: "ACTIVE" | "INACTIVE" | "PENDING";
};
