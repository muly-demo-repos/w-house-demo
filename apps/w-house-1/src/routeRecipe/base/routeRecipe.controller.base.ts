/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RouteRecipeService } from "../routeRecipe.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RouteRecipeCreateInput } from "./RouteRecipeCreateInput";
import { RouteRecipe } from "./RouteRecipe";
import { RouteRecipeFindManyArgs } from "./RouteRecipeFindManyArgs";
import { RouteRecipeWhereUniqueInput } from "./RouteRecipeWhereUniqueInput";
import { RouteRecipeUpdateInput } from "./RouteRecipeUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RouteRecipeControllerBase {
  constructor(
    protected readonly service: RouteRecipeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RouteRecipe })
  @nestAccessControl.UseRoles({
    resource: "RouteRecipe",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRouteRecipe(
    @common.Body() data: RouteRecipeCreateInput
  ): Promise<RouteRecipe> {
    return await this.service.createRouteRecipe({
      data: {
        ...data,

        productionOrder: data.productionOrder
          ? {
              connect: data.productionOrder,
            }
          : undefined,
      },
      select: {
        id: true,
        operationStepId: true,
        operationStepName: true,

        productionOrder: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [RouteRecipe] })
  @ApiNestedQuery(RouteRecipeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RouteRecipe",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async routeRecipes(@common.Req() request: Request): Promise<RouteRecipe[]> {
    const args = plainToClass(RouteRecipeFindManyArgs, request.query);
    return this.service.routeRecipes({
      ...args,
      select: {
        id: true,
        operationStepId: true,
        operationStepName: true,

        productionOrder: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RouteRecipe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RouteRecipe",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async routeRecipe(
    @common.Param() params: RouteRecipeWhereUniqueInput
  ): Promise<RouteRecipe | null> {
    const result = await this.service.routeRecipe({
      where: params,
      select: {
        id: true,
        operationStepId: true,
        operationStepName: true,

        productionOrder: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RouteRecipe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RouteRecipe",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRouteRecipe(
    @common.Param() params: RouteRecipeWhereUniqueInput,
    @common.Body() data: RouteRecipeUpdateInput
  ): Promise<RouteRecipe | null> {
    try {
      return await this.service.updateRouteRecipe({
        where: params,
        data: {
          ...data,

          productionOrder: data.productionOrder
            ? {
                connect: data.productionOrder,
              }
            : undefined,
        },
        select: {
          id: true,
          operationStepId: true,
          operationStepName: true,

          productionOrder: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RouteRecipe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RouteRecipe",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRouteRecipe(
    @common.Param() params: RouteRecipeWhereUniqueInput
  ): Promise<RouteRecipe | null> {
    try {
      return await this.service.deleteRouteRecipe({
        where: params,
        select: {
          id: true,
          operationStepId: true,
          operationStepName: true,

          productionOrder: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}