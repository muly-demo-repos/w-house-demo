/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductionOrderWhereInput } from "./ProductionOrderWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProductionOrderCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProductionOrderWhereInput,
  })
  @Field(() => ProductionOrderWhereInput, { nullable: true })
  @Type(() => ProductionOrderWhereInput)
  where?: ProductionOrderWhereInput;
}

export { ProductionOrderCountArgs as ProductionOrderCountArgs };
