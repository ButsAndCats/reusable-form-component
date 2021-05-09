import * as React from "react";
import { LabelProps } from "../types";

export const InputLabel: React.FC<LabelProps> = ({ name, label, required }) => (
  <label className="block mb-1 font-semibold text-gray-800" htmlFor={name}>
    {label}
    {required ? (
      <sup className="text-red-500">*</sup>
    ) : null}
  </label>
)