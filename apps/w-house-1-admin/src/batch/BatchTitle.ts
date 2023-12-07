import { Batch as TBatch } from "../api/batch/Batch";

export const BATCH_TITLE_FIELD = "batchClassName";

export const BatchTitle = (record: TBatch): string => {
  return record.batchClassName?.toString() || String(record.id);
};
