import * as React from "react";

export const FormTitle: React.FC<Props> = ({ label, required }) => (
  <h6 className="block mb-2 font-semibold text-gray-800 text-lg">
    {label}
    {required ? (
      <sup className="text-red-500">*</sup>
    ) : null}
  </h6>
);

type Props = {
  label: string
  required?: string
}
