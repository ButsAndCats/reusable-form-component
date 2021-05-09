import * as React from "react";
import { InputSchema } from "../types";
import { InputLabel } from "./InputLabel";

export const DateInput: React.FC<InputSchema.Date> = ({ label, required, name, type, blurValidation }) => {
  const [error, setError] = React.useState<null | string>(null);
  return (
    <>
      <InputLabel label={label} required={required} name={name}/>
      <input
        aria-label={label}
        className={`${error ? "border-red-500 focus:ring-red-500" : "border-blue-300 focus:ring-blue-500"} form-input w-full rounded py-3 border  px-4 text-gray-800 focus:shadow-lg focus:ring focus:outline-none`}
        type={type}
        name={name}
        id={name}
        onChange={() => {
          if (error) {
            setError(null);
          }
        }}
        onBlur={(e) => {
          if (required && !Boolean(e.target.value)) {
            setError(required);
            return
          }
          if (blurValidation) {
            setError(blurValidation(e.target.value));
          }
        }}
      />
      {error ? (
        <span className="text-red-500">{error}</span>
      ) : null}
    </>
  )
}
