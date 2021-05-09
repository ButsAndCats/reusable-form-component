import * as React from "react";
import { FormSchema } from "../types";

export const Form: React.FC<Props> = ({ schema }) => (
  <form onSubmit={schema.handleSubmit}>
    {schema.fields.map(({ type, name, label, options }) => ["text", "date", "tel", "checkbox"].includes(type) ? (
      <div>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} id={name} />
      </div>
    ) : type === "select" ? (
      <div>
        <select>
          {options?.map((option) => (
            <option value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    ) : null)}
    <button type="submit">Submit</button>
  </form>
)

export type Props = {
  schema: FormSchema
}