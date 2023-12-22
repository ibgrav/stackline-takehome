import { useMemo } from "react";
import { useTypedSelector } from "./hooks";

export const useProduct = () => {
  const product = useTypedSelector((state) => state.product);
  return useMemo(() => product.data, [product]);
};
