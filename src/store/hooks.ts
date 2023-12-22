import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStoreState } from "./store";
import { api } from "./api";

export const useTypedSelector: TypedUseSelectorHook<RootStoreState> = useSelector;

export const { useGetProductsQuery } = api;
