/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Batch } from "../../batch/base/Batch";
import { Type } from "class-transformer";
import { EnumAssetType } from "./EnumAssetType";

@ObjectType()
class Asset {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  assetDescription!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  assetName!: string;

  @ApiProperty({
    required: false,
    type: () => [Batch],
  })
  @ValidateNested()
  @Type(() => Batch)
  @IsOptional()
  batches?: Array<Batch>;

  @ApiProperty({
    required: false,
    type: () => [Asset],
  })
  @ValidateNested()
  @Type(() => Asset)
  @IsOptional()
  children?: Array<Asset>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Asset,
  })
  @ValidateNested()
  @Type(() => Asset)
  @IsOptional()
  parent?: Asset | null;

  @ApiProperty({
    required: true,
    enum: EnumAssetType,
  })
  @IsEnum(EnumAssetType)
  @Field(() => EnumAssetType, {
    nullable: true,
  })
  type?:
    | "ENT"
    | "SITE"
    | "AREA"
    | "LINE"
    | "CELL"
    | "EQUIPMOD"
    | "EQUIPPHASE"
    | "CONTROLMOD";
}

export { Asset as Asset };
