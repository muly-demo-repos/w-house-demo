import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  assetDescription?: SortOrder;
  assetName?: SortOrder;
  id?: SortOrder;
  parentId?: SortOrder;
  type?: SortOrder;
};
