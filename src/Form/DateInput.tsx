import * as React from "react";
import { InputSchema } from "../types";
import { FormContext } from "./FormContext";
import { InputLabel } from "./InputLabel";

export const DateInput: React.FC<InputSchema.Date> = ({ label, required, name, type, prefix, blurValidation }) => {
  const { errors, setErrors } = React.useContext(FormContext);
  const prefixedName = `${prefix ? prefix : ""}${name}`;
  const error = errors?.[prefixedName];
  return (
    <>
      <InputLabel label={label} required={required} name={prefixedName}/>
      <input
        aria-label={label}
        className={`${error ? "border-red-500 focus:ring-red-500" : "border-blue-300 focus:ring-blue-500"} form-input w-full rounded py-3 border  px-4 text-gray-800 focus:shadow-lg focus:ring focus:outline-none`}
        type={type}
        name={prefixedName}
        id={prefixedName}
        onChange={() => {
          if (error && setErrors) {
            setErrors((prev) => {
              if (!prev) {
                return null;
              }
              delete prev[prefixedName];
              return prev;
            });
          }
        }}
        onBlur={(e) => {
          if (!setErrors) {
            return;
          }
          if (required && !e.target.value) {
            setErrors((prev) => {
              return {
                ...prev,
                [prefixedName]: required,
              };
            });
            return;
          }
          if (blurValidation) {
            const error = blurValidation(e.target.value);
            if (error) {
              setErrors((prev) => {
                return {
                  ...prev,
                  [prefixedName]: error,
                };
              });
            }
          }
        }}
      />
      {error ? (
        <span className="text-red-500">{error}</span>
      ) : null}
    </>
  );
};
