import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RouteRecipeServiceBase } from "./base/routeRecipe.service.base";

@Injectable()
export class RouteRecipeService extends RouteRecipeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
