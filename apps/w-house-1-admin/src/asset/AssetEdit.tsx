import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BatchTitle } from "../batch/BatchTitle";
import { AssetTitle } from "./AssetTitle";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Asset Description" source="assetDescription" />
        <TextInput label="Asset Name" source="assetName" />
        <ReferenceArrayInput
          source="batches"
          reference="Batch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BatchTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="children"
          reference="Asset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssetTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="parent.id" reference="Asset" label="Parent">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "ENT", value: "ENT" },
            { label: "SITE", value: "SITE" },
            { label: "AREA", value: "AREA" },
            { label: "LINE", value: "LINE" },
            { label: "CELL", value: "CELL" },
            { label: "EQUIPMOD", value: "EQUIPMOD" },
            { label: "EQUIPPHASE", value: "EQUIPPHASE" },
            { label: "CONTROLMOD", value: "CONTROLMOD" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
