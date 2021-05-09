import * as React from "react";

export const useMulti = (): MultiProps => {
  const [count, setCount] = React.useState<MultiProps["count"]>(1);

  const handleAddFields = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, [])

  return {
    count,
    handleAddFields
  }
}

export type MultiProps = {
  count: number
  handleAddFields: () => void
}