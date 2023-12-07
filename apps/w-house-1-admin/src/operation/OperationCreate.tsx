import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OperationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Operation Name" source="operationName" />
      </SimpleForm>
    </Create>
  );
};
