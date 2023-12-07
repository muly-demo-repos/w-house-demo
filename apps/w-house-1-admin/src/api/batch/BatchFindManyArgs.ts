import { BatchWhereInput } from "./BatchWhereInput";
import { BatchOrderByInput } from "./BatchOrderByInput";

export type BatchFindManyArgs = {
  where?: BatchWhereInput;
  orderBy?: Array<BatchOrderByInput>;
  skip?: number;
  take?: number;
};
