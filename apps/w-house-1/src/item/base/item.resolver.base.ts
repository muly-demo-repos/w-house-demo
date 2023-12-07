/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Item } from "./Item";
import { ItemCountArgs } from "./ItemCountArgs";
import { ItemFindManyArgs } from "./ItemFindManyArgs";
import { ItemFindUniqueArgs } from "./ItemFindUniqueArgs";
import { CreateItemArgs } from "./CreateItemArgs";
import { UpdateItemArgs } from "./UpdateItemArgs";
import { DeleteItemArgs } from "./DeleteItemArgs";
import { BatchFindManyArgs } from "../../batch/base/BatchFindManyArgs";
import { Batch } from "../../batch/base/Batch";
import { ProductionOrderFindManyArgs } from "../../productionOrder/base/ProductionOrderFindManyArgs";
import { ProductionOrder } from "../../productionOrder/base/ProductionOrder";
import { ItemService } from "../item.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Item)
export class ItemResolverBase {
  constructor(
    protected readonly service: ItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async _itemsMeta(
    @graphql.Args() args: ItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Item])
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async items(@graphql.Args() args: ItemFindManyArgs): Promise<Item[]> {
    return this.service.items(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Item, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "own",
  })
  async item(@graphql.Args() args: ItemFindUniqueArgs): Promise<Item | null> {
    const result = await this.service.item(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Item)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "create",
    possession: "any",
  })
  async createItem(@graphql.Args() args: CreateItemArgs): Promise<Item> {
    return await this.service.createItem({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Item)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "update",
    possession: "any",
  })
  async updateItem(@graphql.Args() args: UpdateItemArgs): Promise<Item | null> {
    try {
      return await this.service.updateItem({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Item)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "delete",
    possession: "any",
  })
  async deleteItem(@graphql.Args() args: DeleteItemArgs): Promise<Item | null> {
    try {
      return await this.service.deleteItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Batch], { name: "batches" })
  @nestAccessControl.UseRoles({
    resource: "Batch",
    action: "read",
    possession: "any",
  })
  async findBatches(
    @graphql.Parent() parent: Item,
    @graphql.Args() args: BatchFindManyArgs
  ): Promise<Batch[]> {
    const results = await this.service.findBatches(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ProductionOrder], { name: "productionOrders" })
  @nestAccessControl.UseRoles({
    resource: "ProductionOrder",
    action: "read",
    possession: "any",
  })
  async findProductionOrders(
    @graphql.Parent() parent: Item,
    @graphql.Args() args: ProductionOrderFindManyArgs
  ): Promise<ProductionOrder[]> {
    const results = await this.service.findProductionOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
