import * as React from "react";
import { FormSchema } from "../types";
import { Button } from "./Button";
import { FieldMapper } from "./FieldMapper";



export const Form: React.FC<Props> = ({ schema }) => (
  <form className="w-full" onSubmit={schema.handleSubmit}>
    <FieldMapper
      fields={schema.fields}
    />
    <Button type="submit">Submit</Button>
  </form>
)

export type Props = {
  schema: FormSchema
}