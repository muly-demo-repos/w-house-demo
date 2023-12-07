import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RouteRecipeModuleBase } from "./base/routeRecipe.module.base";
import { RouteRecipeService } from "./routeRecipe.service";
import { RouteRecipeController } from "./routeRecipe.controller";
import { RouteRecipeResolver } from "./routeRecipe.resolver";

@Module({
  imports: [RouteRecipeModuleBase, forwardRef(() => AuthModule)],
  controllers: [RouteRecipeController],
  providers: [RouteRecipeService, RouteRecipeResolver],
  exports: [RouteRecipeService],
})
export class RouteRecipeModule {}
