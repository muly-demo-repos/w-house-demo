import { Item as TItem } from "../api/item/Item";

export const ITEM_TITLE_FIELD = "batchClassName";

export const ItemTitle = (record: TItem): string => {
  return record.batchClassName?.toString() || String(record.id);
};
