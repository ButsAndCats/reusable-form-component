import React from "react";

export type FormSchema = {
  handleSubmit: (data: unknown, event: React.FormEvent) => Promise<void>
  fields: Array<InputSchema>
}

export type InputSchema = InputSchema.Text | InputSchema.Date | InputSchema.Select | InputSchema.Checkbox | InputSchema.Multi
export namespace InputSchema {
  export type Text = LabelProps & NestedProps & {
    type: "text"
    blurValidation?: (value: string) => string | null
  }

  export type Date = LabelProps & NestedProps & {
    type: "date"
    blurValidation?: (value: string) => string | null
  }

  export type Select = LabelProps & NestedProps & {
    type: "select",
    options: Array<{
      label: string
      value: string
    }>
  }

  export type Checkbox = LabelProps & NestedProps & {
    type: "checkbox",
    required?: string 
    checked: {
      title: string
      fields: Array<InputSchema>
    }
  }

  export type Multi = LabelProps & NestedProps & {
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

export type NestedProps = {
  prefix?: string
}