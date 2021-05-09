import * as React from "react";
import { FormSchema } from "../types";
import { FieldMapper } from "./FieldMapper";



export const Form: React.FC<Props> = ({ schema }) => (
  <form className="w-full" onSubmit={schema.handleSubmit}>
    <FieldMapper
      fields={schema.fields}
    />
    <button className="w-full bg-blue-500 py-3 rounded text-white font-semibold hover:shadow-lg disabled:opacity-50" disabled={true} type="submit">
      Submit
    </button>
  </form>
)

export type Props = {
  schema: FormSchema
}