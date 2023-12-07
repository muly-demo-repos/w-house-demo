import { BatchCreateNestedManyWithoutAssetsInput } from "./BatchCreateNestedManyWithoutAssetsInput";
import { AssetCreateNestedManyWithoutAssetsInput } from "./AssetCreateNestedManyWithoutAssetsInput";
import { AssetWhereUniqueInput } from "./AssetWhereUniqueInput";

export type AssetCreateInput = {
  assetDescription: string;
  assetName: string;
  batches?: BatchCreateNestedManyWithoutAssetsInput;
  children?: AssetCreateNestedManyWithoutAssetsInput;
  parent?: AssetWhereUniqueInput | null;
  type:
    | "ENT"
    | "SITE"
    | "AREA"
    | "LINE"
    | "CELL"
    | "EQUIPMOD"
    | "EQUIPPHASE"
    | "CONTROLMOD";
};
