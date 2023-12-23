import type { Meta, StoryObj } from "@storybook/react";
import { ProductTable } from "./product-table";
import { reduxDecorator } from ".storybook/decorators";
import { renderGetProductsQuery } from ".storybook/renderers";

const meta = {
  title: "Product Table",
  component: ProductTable,
  decorators: [reduxDecorator], // reduxDecorator is required for any consumer of redux hooks/state
  render: renderGetProductsQuery(ProductTable) // renderGetProductsQuery required for any consumer of the product slice
} satisfies Meta<typeof ProductTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _ProductTable: Story = {};
