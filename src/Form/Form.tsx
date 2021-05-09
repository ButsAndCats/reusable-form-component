import * as React from "react";
import { FormSchema } from "../types";
import { InputLabel } from "./InputLabel";

export const Form: React.FC<Props> = ({ schema }) => (
  <form className="w-full" onSubmit={schema.handleSubmit}>
    {schema.fields.map(({ type, name, label, options, required }) => (
      <div className="mb-4">
        {["text", "date", "tel"].includes(type) ? (
          <>
            <InputLabel label={label} required={required} name={name}/>
            <input className="w-full rounded py-3 border border-blue-300 px-4 text-gray-800 focus:shadow-lg focus:ring focus:border-blue-500 focus:outline-none" type={type} name={name} id={name} />
          </>
        ) : type === "checkbox" ? (
          <>
            <input className="w-full rounded py-3 border border-blue-300 px-4 text-gray-800 focus:shadow-lg focus:ring focus:border-blue-500 focus:outline-none" type={type} name={name} id={name} />
            <label className="block mb-1 font-semibold text-gray-800" htmlFor={name}>{label}</label>
          </>
        ) : type === "select" ? (
          <>
            <InputLabel label={label} required={required} name={name}/>
            <select className="w-full rounded py-3 border border-blue-300 px-4 text-gray-800 focus:shadow-lg focus:ring focus:border-blue-500 focus:outline-none">
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
        ) : null}
      </div>
    ))}
    <button className="w-full bg-blue-500 py-3 rounded text-white font-semibold hover:shadow-lg disabled:opacity-50" disabled={true} type="submit">
      Submit
    </button>
  </form>
)

export type Props = {
  schema: FormSchema
}