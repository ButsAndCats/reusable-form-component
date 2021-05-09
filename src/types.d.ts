import React from "react";

export type FormSchema = {
  handleSubmit: (event: React.FormEvent) => Promise<void>
  fields: Array<{
    label: string
    name: string
    type: "text" | "date" | "select" | "tel" | "checkbox"
    options?: Array<{
      label: string
      value: string
    }>
    required?: boolean
    validation?: () => boolean
  }>
}