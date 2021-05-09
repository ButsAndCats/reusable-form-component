import * as React from "react";
import { InputSchema } from "../types";
import { Button } from "./Button";
import { FieldMapper } from "./FieldMapper";
import { FormTitle } from "./FormTitle";
import { useMulti } from "./useMulti";

export const Multi: React.FC<InputSchema.Multi> = ({ label, required, name, fields, limit, buttonText }) => {
  const { count, handleAddFields } = useMulti();
  return (
    <div className="border-l-4 border-gray-300 pl-4">
      <FormTitle label={label} required={required} />
      {[...Array(count)].map(() => (
        <FieldMapper fields={fields} />
      ))}
      {count < limit ? (
        <Button type="button" onClick={() => handleAddFields()}>{buttonText}</Button>
      ) : null}
    </div>
  )
}
