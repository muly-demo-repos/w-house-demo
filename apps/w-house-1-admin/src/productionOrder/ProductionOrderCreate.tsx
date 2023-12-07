import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BatchTitle } from "../batch/BatchTitle";
import { RouteTitle } from "../route/RouteTitle";
import { RouteRecipeTitle } from "../routeRecipe/RouteRecipeTitle";
import { ItemTitle } from "../item/ItemTitle";

export const ProductionOrderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="batches"
          reference="Batch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BatchTitle} />
        </ReferenceArrayInput>
        <TextInput label="Class Name" source="className" />
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Created By" source="createdBy" />
        <DateTimeInput label="Edited At" source="editedAt" />
        <TextInput label="Edited By" source="editedBy" />
        <DateTimeInput label="End Date" source="endDate" />
        <BooleanInput label="Firmed" source="firmed" />
        <BooleanInput label="Released" source="released" />
        <ReferenceInput source="route.id" reference="Route" label="Route">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="routeRecipes"
          reference="RouteRecipe"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RouteRecipeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Schema Version" source="schemaVersion" />
        <DateTimeInput label="Start Date" source="startDate" />
        <TextInput label="State" source="state" />
        <ReferenceInput source="wipItem.id" reference="Item" label="Wip Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
