import type { Meta, StoryObj } from "@storybook/react";
import { ProductTable } from "./product-table";
import { reduxDecorator } from ".storybook/decorators";
import { renderGetProductsQuery } from ".storybook/renderers";

const meta = {
  title: "Product Table",
  component: ProductTable,
  decorators: [reduxDecorator],
  render: renderGetProductsQuery(ProductTable)
} satisfies Meta<typeof ProductTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _ProductTable: Story = {};
