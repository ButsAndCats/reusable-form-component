import React from "react";

export type FormSchema = {
  handleSubmit: (event: React.FormEvent) => Promise<void>
  fields: Array<InputSchema>
}

export type InputSchema = InputSchema.Text | InputSchema.Date | InputSchema.Select | InputSchema.Checkbox | InputSchema.Multi
export namespace InputSchema {
  export type Text = LabelProps & {
    type: "text"
    blurValidation?: (value: string) => string | null
  }

  export type Date = LabelProps & {
    type: "date"
    blurValidation?: (value: string) => string | null
  }

  export type Select = LabelProps & {
    type: "select",
    options: Array<{
      label: string
      value: string
    }>
  }

  export type SelectInput = LabelProps & {
    type: "select",
    options: Array<{
      label: string
      value: string
    }>
  }

  export type Checkbox = LabelProps & {
    type: "checkbox",
    checked: {
      title: string
      name: string
      fields: Array<InputSchema>
    }
  }

  export type Multi = LabelProps & {
    type: "multi",
    buttonText: string
    limit: number
    fields: Array<InputSchema>
  }
}

export type LabelProps = {
  name: string
  label: string
  required?: string
}