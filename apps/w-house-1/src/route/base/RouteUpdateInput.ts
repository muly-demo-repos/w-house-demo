/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BatchUpdateManyWithoutRoutesInput } from "./BatchUpdateManyWithoutRoutesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ProductionOrderUpdateManyWithoutRoutesInput } from "./ProductionOrderUpdateManyWithoutRoutesInput";

@InputType()
class RouteUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BatchUpdateManyWithoutRoutesInput,
  })
  @ValidateNested()
  @Type(() => BatchUpdateManyWithoutRoutesInput)
  @IsOptional()
  @Field(() => BatchUpdateManyWithoutRoutesInput, {
    nullable: true,
  })
  batches?: BatchUpdateManyWithoutRoutesInput;

  @ApiProperty({
    required: false,
    type: () => ProductionOrderUpdateManyWithoutRoutesInput,
  })
  @ValidateNested()
  @Type(() => ProductionOrderUpdateManyWithoutRoutesInput)
  @IsOptional()
  @Field(() => ProductionOrderUpdateManyWithoutRoutesInput, {
    nullable: true,
  })
  productionOrder?: ProductionOrderUpdateManyWithoutRoutesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  routeName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  routeOperation?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  routeOperationStep?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  routeRevision?: string;
}

export { RouteUpdateInput as RouteUpdateInput };
