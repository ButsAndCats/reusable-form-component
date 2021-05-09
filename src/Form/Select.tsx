import * as React from "react";
import { InputSchema } from "../types";
import { InputLabel } from "./InputLabel";

export const Select: React.FC<InputSchema.Select> = ({ label, required, name, options }) => (
  <>
    <InputLabel label={label} required={required} name={name} />
    <select className="form-select w-full rounded py-3 border border-blue-300 px-4 text-gray-800 focus:shadow-lg focus:ring focus:ring-blue-500 focus:outline-none">
      {!Boolean(required) ? (
        <option value=""></option>
      ) : null}
      {options?.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </>
)
