import * as React from "react";
import { InputSchema } from "../types";
import { FieldMapper } from "./FieldMapper";
import { FormContext } from "./FormContext";
import { FormTitle } from "./FormTitle";
import { useCheckbox } from "./useCheckbox";

export const Checkbox: React.FC<InputSchema.Checkbox> = ({ label, name, type, required, prefix, ...props }) => {
  const {checked, handleCheckbox} = useCheckbox();
  const { errors, setErrors } = React.useContext(FormContext);
  const prefixedName = `${prefix ? prefix : ""}${name}`
  const error = errors?.[prefixedName]

  return (
    <>
      <label className="flex items-center" htmlFor={prefixedName}>
        <input
          className="form-checkbox rounded w-5 h-5 text-blue-500 border-blue-500 rounded"
          type={type}
          name={prefixedName}
          id={prefixedName}
          aria-label={label}
          checked={checked}
          onChange={() => {
            handleCheckbox()
            if (error && setErrors) {
              setErrors((prev) => {
                if (!prev) {
                  return null
                }
                delete prev[prefixedName];
                return prev;
              });
            }
          }}
        />
        <span className="ml-2 inline-block text-gray-800 font-semibold">
          {label}
          {required ? (
            <sup className="text-red-500 pl-1">*</sup>
          ) : <sup className="text-grey-500 font-light pl-2">Optional</sup>}
        </span>
      </label>
      {error ? (
        <span className="text-red-500 block">{error}</span>
      ) : null}
      {props.checked?.fields && checked ? (
        <div className="mt-2 border-l-4 border-gray-300 pl-4">
          <FormTitle label={props.checked.title}>{props.checked.title}</FormTitle>
          <FieldMapper fields={props.checked.fields} prefix={name} />
        </div>
      ) : null}

    </>
  );
}
