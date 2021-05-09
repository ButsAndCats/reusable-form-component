import * as React from "react";
import { InputSchema } from "../types";

export const Checkbox: React.FC<InputSchema.Checkbox> = ({ label, required, name, type }) => (
  <label className="flex items-center" htmlFor={name}>
    <input className="form-checkbox rounded w-5 h-5 text-blue-500 border-blue-500 rounded" type={type} name={name} id={name} aria-label={label} />
    <span className="ml-2 inline-block text-gray-800 font-semibold">{label}</span>
  </label>
)
