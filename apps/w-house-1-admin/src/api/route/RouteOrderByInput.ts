import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  id?: SortOrder;
  routeName?: SortOrder;
  routeOperation?: SortOrder;
  routeOperationStep?: SortOrder;
  routeRevision?: SortOrder;
};
