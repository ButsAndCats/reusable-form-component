import * as React from "react";
import { FormSchema } from "../types";
import { FormProvider } from "./FormContext";

export const Form: React.FC<Props> = ({ schema }) => <FormProvider schema={schema} />;

type Props = {
  schema: FormSchema
}