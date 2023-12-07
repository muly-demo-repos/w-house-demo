/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Operation } from "@prisma/client";

export class OperationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OperationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperationCountArgs>
  ): Promise<number> {
    return this.prisma.operation.count(args);
  }

  async operations<T extends Prisma.OperationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperationFindManyArgs>
  ): Promise<Operation[]> {
    return this.prisma.operation.findMany(args);
  }
  async operation<T extends Prisma.OperationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperationFindUniqueArgs>
  ): Promise<Operation | null> {
    return this.prisma.operation.findUnique(args);
  }
  async createOperation<T extends Prisma.OperationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperationCreateArgs>
  ): Promise<Operation> {
    return this.prisma.operation.create<T>(args);
  }
  async updateOperation<T extends Prisma.OperationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperationUpdateArgs>
  ): Promise<Operation> {
    return this.prisma.operation.update<T>(args);
  }
  async deleteOperation<T extends Prisma.OperationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperationDeleteArgs>
  ): Promise<Operation> {
    return this.prisma.operation.delete(args);
  }
}