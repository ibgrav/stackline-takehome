// separate hook file to avoid circular dependencies and contain any additional store hook logic

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStoreState } from "./create-store";
import { queryApi } from "./query-api";

export const useTypedSelector: TypedUseSelectorHook<RootStoreState> = useSelector;

export const { useGetProductsQuery, useLazyGetProductsQuery } = queryApi;
