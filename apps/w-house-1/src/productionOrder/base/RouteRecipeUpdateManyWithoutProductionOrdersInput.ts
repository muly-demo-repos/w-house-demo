/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RouteRecipeWhereUniqueInput } from "../../routeRecipe/base/RouteRecipeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RouteRecipeUpdateManyWithoutProductionOrdersInput {
  @Field(() => [RouteRecipeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RouteRecipeWhereUniqueInput],
  })
  connect?: Array<RouteRecipeWhereUniqueInput>;

  @Field(() => [RouteRecipeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RouteRecipeWhereUniqueInput],
  })
  disconnect?: Array<RouteRecipeWhereUniqueInput>;

  @Field(() => [RouteRecipeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RouteRecipeWhereUniqueInput],
  })
  set?: Array<RouteRecipeWhereUniqueInput>;
}

export { RouteRecipeUpdateManyWithoutProductionOrdersInput as RouteRecipeUpdateManyWithoutProductionOrdersInput };
