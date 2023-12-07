import { BatchUpdateManyWithoutAssetsInput } from "./BatchUpdateManyWithoutAssetsInput";
import { AssetUpdateManyWithoutAssetsInput } from "./AssetUpdateManyWithoutAssetsInput";
import { AssetWhereUniqueInput } from "./AssetWhereUniqueInput";

export type AssetUpdateInput = {
  assetDescription?: string;
  assetName?: string;
  batches?: BatchUpdateManyWithoutAssetsInput;
  children?: AssetUpdateManyWithoutAssetsInput;
  parent?: AssetWhereUniqueInput | null;
  type?:
    | "ENT"
    | "SITE"
    | "AREA"
    | "LINE"
    | "CELL"
    | "EQUIPMOD"
    | "EQUIPPHASE"
    | "CONTROLMOD";
};
