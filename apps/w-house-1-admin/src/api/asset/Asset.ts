import { Batch } from "../batch/Batch";

export type Asset = {
  assetDescription: string;
  assetName: string;
  batches?: Array<Batch>;
  children?: Array<Asset>;
  id: string;
  parent?: Asset | null;
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
