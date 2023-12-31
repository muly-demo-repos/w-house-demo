/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Route, // @ts-ignore
  Batch, // @ts-ignore
  ProductionOrder,
} from "@prisma/client";

export class RouteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RouteCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteCountArgs>
  ): Promise<number> {
    return this.prisma.route.count(args);
  }

  async routes<T extends Prisma.RouteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteFindManyArgs>
  ): Promise<Route[]> {
    return this.prisma.route.findMany(args);
  }
  async route<T extends Prisma.RouteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteFindUniqueArgs>
  ): Promise<Route | null> {
    return this.prisma.route.findUnique(args);
  }
  async createRoute<T extends Prisma.RouteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteCreateArgs>
  ): Promise<Route> {
    return this.prisma.route.create<T>(args);
  }
  async updateRoute<T extends Prisma.RouteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteUpdateArgs>
  ): Promise<Route> {
    return this.prisma.route.update<T>(args);
  }
  async deleteRoute<T extends Prisma.RouteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RouteDeleteArgs>
  ): Promise<Route> {
    return this.prisma.route.delete(args);
  }

  async findBatches(
    parentId: string,
    args: Prisma.BatchFindManyArgs
  ): Promise<Batch[]> {
    return this.prisma.route
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .batches(args);
  }

  async findProductionOrder(
    parentId: string,
    args: Prisma.ProductionOrderFindManyArgs
  ): Promise<ProductionOrder[]> {
    return this.prisma.route
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productionOrder(args);
  }
}
