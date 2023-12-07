import { SortOrder } from "../../util/SortOrder";

export type ProductionOrderOrderByInput = {
  className?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  editedAt?: SortOrder;
  editedBy?: SortOrder;
  endDate?: SortOrder;
  firmed?: SortOrder;
  id?: SortOrder;
  released?: SortOrder;
  routeRouteId?: SortOrder;
  schemaVersion?: SortOrder;
  startDate?: SortOrder;
  state?: SortOrder;
  itemId?: SortOrder;
};
