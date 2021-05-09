import React from "react"
import { Form } from "./Form/Form"
import { FormSchema } from "./types"

const schema: FormSchema = {
  handleSubmit: async (data) => { console.log(data) },
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
      name: "dob",
      required: "Your date of birth is required",
      // /**
      //  * Ensure that the user is at least 18
      //  */
      blurValidation: (value: string) => {
        const todaysDate = new Date();
        const birthday = new Date(value);
        const testDate = new Date(birthday.getFullYear() + 18, birthday.getMonth(), birthday.getDate())
        if (todaysDate < testDate) {
          return "You must be at least 18 to proceed"
        }
        return null
      },
    },
    {
      type: "select",
      label: "Gender",
      name: "gender",
      options: [
        {
          label: "Male",
          value: "1",
        },
        {
          label: "Female",
          value: "2",
        }
      ]
    },
    {
      type: "multi",
      label: "Contact number",
      name: "contact",
      buttonText: "Add another contact number",
      limit: 3,
      fields: [
        {
          type: "select",
          label: "Type",
          name: "type",
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
      required: "You must have guardian consent to proceed.",
      name: "guardian",
      checked: {
        title: "Guardian",
        fields: [
          {
            type: "text",
            label: "Name",
            name: "name",
            required: "Please provide the Guardian's full name",
          },
          {
            type: "text",
            label: "Number",
            name: "contact",
            required: "Please provide the Guardian's contact number",
          },
        ]
      }
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
