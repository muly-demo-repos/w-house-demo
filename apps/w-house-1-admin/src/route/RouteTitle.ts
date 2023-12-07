import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "routeName";

export const RouteTitle = (record: TRoute): string => {
  return record.routeName?.toString() || String(record.id);
};
