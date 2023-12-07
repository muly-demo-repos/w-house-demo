import { StringFilter } from "../../util/StringFilter";
import { BatchListRelationFilter } from "../batch/BatchListRelationFilter";
import { AssetListRelationFilter } from "./AssetListRelationFilter";
import { AssetWhereUniqueInput } from "./AssetWhereUniqueInput";

export type AssetWhereInput = {
  assetDescription?: StringFilter;
  assetName?: StringFilter;
  batches?: BatchListRelationFilter;
  children?: AssetListRelationFilter;
  id?: StringFilter;
  parent?: AssetWhereUniqueInput;
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
