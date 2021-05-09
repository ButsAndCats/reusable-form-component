import * as React from "react";

export const useCheckbox = (): MultiProps => {
  const [checked, setChecked] = React.useState<MultiProps["checked"]>(false);

  const handleCheckbox = React.useCallback(() => {
    setChecked((prev) => !prev);
  }, [])

  return {
    checked,
    handleCheckbox
  }
}

export type MultiProps = {
  checked: boolean
  handleCheckbox: () => void
}