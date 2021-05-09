import * as React from "react";

export const useCheckbox = (): CheckboxProps => {
  const [checked, setChecked] = React.useState<CheckboxProps["checked"]>(false);

  const handleCheckbox = React.useCallback(() => {
    setChecked((prev) => !prev);
  }, [])

  return {
    checked,
    handleCheckbox
  }
}

export type CheckboxProps = {
  checked: boolean
  handleCheckbox: () => void
}