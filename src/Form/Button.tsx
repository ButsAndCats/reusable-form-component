import * as React from "react";

export const Button: React.FC<Props> = ({ children, type = "button", ...props }) => (
<button {...props} type={type} className="w-full bg-blue-500 py-3 rounded text-white font-semibold hover:shadow-lg disabled:opacity-50">
  {children}
</button>
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>