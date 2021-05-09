import React from "react"
import { Form } from "./Form/Form"
import { FormSchema } from "./types"

const schema: FormSchema = {
  handleSubmit: async () => { console.log("submit") },
  fields: [
    {
      type: "text",
      label: "Full name",
      name: "name",
      required: true,
    },
    {
      type: "date",
      label: "Date of birth",
      name: "dateOfBirth",
      required: true,
    },
    {
      type: "select",
      label: "Gender",
      name: "gender",
      options: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        }
      ]
    },
    {
      type: "text",
      label: "Contact number",
      name: "contactNumber",
    },
    {
      type: "checkbox",
      label: "Guardian consent",
      name: "consent"
    }
  ]
}

const App = () => {

  return (
    <div className="max-w-xl mx-auto py-4">
      <div className="p-4 bg-white rounded-lg">
        <Form 
          schema={schema}
        />
      </div> 
    </div>
  )
}

export default App
