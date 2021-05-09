import React from "react";

export type FormSchema = {
  handleSubmit: (event: React.FormEvent) => Promise<void>
  fields: Array<LabelProps & {
    type: "text" | "date" | "select" | "tel" | "checkbox"
    options?: Array<{
      label: string
      value: string
    }>
    validation?: () => boolean
  }>
}

export type LabelProps = {
  name: string
  label: string
  required?: boolean
}