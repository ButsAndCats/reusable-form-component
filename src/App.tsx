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
      /**
       * Ensure there are only 2 names and that each name is at least 1 character
       */
      blurValidation: (value: string) => {
        const names = value.split(" ");
        if (names.length === 2 && names[0].length >= 1 && names[1].length >= 1 ) {
          return null
        }
        return "Please provide a first and last name";
      },
      required: "Please enter your full name",
    },
    {
      type: "date",
      label: "Date of birth",
      name: "dateOfBirth",
      required: "Your date of birth is required",
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
      type: "multi",
      label: "Contact number",
      name: "contactNumber",
      fields: [
        {
          type: "select",
          label: "Type",
          name: "contactType",
          options: [
            {
              label: "Home",
              value: "home",
            },
            {
              label: "Work",
              value: "work",
            },
            {
              label: "Mobile",
              value: "mobile",
            }
          ]
        },
        {
          type: "text",
          label: "Number",
          name: "number",
        },
      ]
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
