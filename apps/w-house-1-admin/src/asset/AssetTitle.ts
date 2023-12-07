import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "assetName";

export const AssetTitle = (record: TAsset): string => {
  return record.assetName?.toString() || String(record.id);
};
