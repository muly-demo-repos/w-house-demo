import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RouteRecipeService } from "./routeRecipe.service";
import { RouteRecipeControllerBase } from "./base/routeRecipe.controller.base";

@swagger.ApiTags("routeRecipes")
@common.Controller("routeRecipes")
export class RouteRecipeController extends RouteRecipeControllerBase {
  constructor(
    protected readonly service: RouteRecipeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
