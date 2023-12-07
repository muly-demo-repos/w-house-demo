import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OperationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Operation Name" source="operationName" />
      </SimpleForm>
    </Edit>
  );
};
