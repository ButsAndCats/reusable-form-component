import * as React from "react";
import { InputSchema } from "../types";
import { FieldMapper } from "./FieldMapper";
import { InputLabel } from "./InputLabel";

export const Multi: React.FC<InputSchema.Multi> = ({ label, required, name, fields }) => (
  <div className="border-l-4 border-gray-300 pl-4">
    <InputLabel label={label} required={required} name={name} />
    <FieldMapper fields={fields} />
  </div>
)
