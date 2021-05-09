import * as React from "react";
import { InputSchema } from "../types";
import { FieldMapper } from "./FieldMapper";
import { FormTitle } from "./FormTitle";
import { useCheckbox } from "./useCheckbox";

export const Checkbox: React.FC<InputSchema.Checkbox> = ({ label, name, type, ...props }) => {
  const {checked, handleCheckbox} = useCheckbox();
  return (
    <>
      <label className="flex items-center" htmlFor={name}>
        <input
          className="form-checkbox rounded w-5 h-5 text-blue-500 border-blue-500 rounded"
          type={type}
          name={name}
          id={name}
          aria-label={label}
          checked={checked}
          onChange={() => handleCheckbox()}
        />
        <span className="ml-2 inline-block text-gray-800 font-semibold">{label}</span>
      </label>
      {props.checked?.fields && checked ? (
        <div className="mt-2 border-l-4 border-gray-300 pl-4">
          <FormTitle label={props.checked.title}>{props.checked.title}</FormTitle>
          <FieldMapper fields={props.checked.fields} />
        </div>
      ) : null}

    </>
  );
}
