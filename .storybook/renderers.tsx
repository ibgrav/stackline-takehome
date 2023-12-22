import type { FC } from "react";
import type { Meta } from "@storybook/react";
import { useGetProductsQuery } from "@/store/store-hooks";

type ArgsStoryFn = Meta<any>["render"];

export const renderGetProductsQuery = (Story: FC): ArgsStoryFn => {
  return function RenderGetProductsQuery(args) {
    useGetProductsQuery();
    return <Story {...args} />;
  };
};
