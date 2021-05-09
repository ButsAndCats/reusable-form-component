import React from "react";
import { FormSchema, InputSchema } from "../types";
import { Button } from "./Button";
import { FieldMapper } from "./FieldMapper";

export const FormContext = React.createContext<FormContextState>({
  errors: null,
  disabled: true,
  setErrors: null,
});

export const FormProvider: React.FC<Props> = ({ schema }) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<Record<string, string> | null>(null);

  const validate = React.useCallback((elem: HTMLInputElement | HTMLSelectElement, field: InputSchema) => {
    const { value } = elem;
    if (field.required) {
      /** Required date or text fields are empty */
      if (["text", "date"].includes(field.type) && value === "") {
        return field.required;
      /** Handle checkbox fields */
      } else if ("checked" in elem && ["checkbox"].includes(field.type)) {
        /** required checkbox is not checked */
        if (!elem.checked) {
          return field.required;
        }
      }
    }
    if ("blurValidation" in field && field.blurValidation) {
      return field.blurValidation(value);
    }
    return null;
  }, []);

  const buildValidation = (fields: Array<InputSchema>, prefix?: string): Validation => {
    let validation: Validation = {};
    for (const field of fields) {
      validation[`${prefix ? prefix : ""}${field.name}`] = field;
      if (field.type === "checkbox" && field.checked?.fields) {
        const checkboxValidation = buildValidation(field.checked.fields, field.name);
        validation = Object.assign(validation, checkboxValidation);
      }
      if (field.type === "multi" && field.fields) {
        const multiValidation = buildValidation(field.fields);
        validation = Object.assign(validation, multiValidation);
      }
    }
    return validation;
  };

  const buildFormData = (elements: Record<string, HTMLInputElement | HTMLSelectElement>, fields: Array<InputSchema>) => {
    const data: Record<string, string | unknown> = {};
    
    for (const field of fields) {
      if (field.type === "multi" && field.fields) {
        data[field.name] = [];
        for (let f = 0; f <= field.limit; f += 1) {
          const count = Math.ceil((f + 1) * (1 / fields.length));
          const subfield = field.fields[f % field.fields.length];
          data[field.name][count - 1] = data[field.name][count - 1] || {};
          data[field.name][count - 1][subfield.name] = elements[`${field.name}-${count}-${subfield.name}`].value;
        }
        continue;
      }
      if (field.type === "checkbox" && field.checked?.fields) {
        data[field.name] = {};
        for (const f of field.checked?.fields) {
          const element = elements[`${field.name}${f.name}`];
          if (element) {
            data[field.name][f.name.replace(field.name, "")] = element.value;
          }
        }
        continue;
      }
      data[field.name] = elements[field.name].value;
 
    }
    return data;
  };

  const validateAndHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);
    
    const { elements } = formRef.current as HTMLFormElement;
    const validation: Validation = buildValidation(schema.fields);
    if (!elements || !validation) {
      return;
    }
    /**
     * Create an object of the form elements using the element name as the key.
     * This already exists in some browsers, but not all
     */
    const elementsMap: Record<string, HTMLInputElement | HTMLSelectElement>  = {};
    for (const element of elements) {
      const elem = element as HTMLInputElement | HTMLSelectElement;
      if (elem.name !== "") {
        elementsMap[elem.name] = elem;
      }
    }
    /**
     * Validate each field as per the schema
     */
    const errors: Record<string, string> = {};
    if (validation && elementsMap) {
      Object.keys(elementsMap).forEach((key) => {
        if (validation[key]) {
          const error = validate(elementsMap[key], validation[key]);
          if (error) {
            errors[key] = error;
          }
        }
      });
    }
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      setErrors(null);
      const data = buildFormData(elementsMap, schema.fields);
      schema.handleSubmit(data, e);
    }
    setDisabled(false);
  };

  return (
    <FormContext.Provider
      value={{
        errors,
        setErrors,
        disabled,
      }}
    >
      <form
        className="w-full"
        onSubmit={validateAndHandleSubmit}
        ref={formRef}
      >
        <FieldMapper
          fields={schema.fields}
        />
        <Button type="submit" disabled={disabled}>Submit</Button>
      </form>
    </FormContext.Provider>
  );
};

export type FormContextState = {
  disabled: boolean
  errors?: Record<string, string> | null
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string> | null>> | null
}

type Props = {
  schema: FormSchema
}

type Validation = Record<string, InputSchema>
