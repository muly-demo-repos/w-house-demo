import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RouteRecipeResolverBase } from "./base/routeRecipe.resolver.base";
import { RouteRecipe } from "./base/RouteRecipe";
import { RouteRecipeService } from "./routeRecipe.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RouteRecipe)
export class RouteRecipeResolver extends RouteRecipeResolverBase {
  constructor(
    protected readonly service: RouteRecipeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
