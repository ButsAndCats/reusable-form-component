import * as React from "react";
import { InputSchema } from "../types";
import { Checkbox } from "./Checkbox";
import { DateInput } from "./DateInput";
import { Multi } from "./Multi";
import { Select } from "./Select";
import { TextInput } from "./TextInput";

const inputMap: Record<string, (props: any) => JSX.Element> = {
  text: (props) => <TextInput {...props} />,
  date: (props) => <DateInput {...props} />,
  checkbox: (props) => <Checkbox {...props} />,
  select: (props) => <Select {...props} />,
  multi: (props) => <Multi {...props} />,
}

export const FieldMapper: React.FC<Props> = ({ fields, prefix }) => (
  <>
    {fields.map((props) => (
      <div className="mb-4" key={props.name}>
        {inputMap[props.type] ? inputMap[props.type]({ ...props, prefix }) : null}
      </div>
    ))}
  </>
);
  
type Props = {
  fields: Array<InputSchema>
  prefix?: string
}