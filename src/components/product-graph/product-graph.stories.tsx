import type { Meta, StoryObj } from "@storybook/react";
import { ProductGraph } from "./product-graph";
import { reduxDecorator } from ".storybook/decorators";
import { renderGetProductsQuery } from ".storybook/renderers";

const meta = {
  title: "Product Graph",
  component: ProductGraph,
  decorators: [reduxDecorator],
  render: renderGetProductsQuery(ProductGraph)
} satisfies Meta<typeof ProductGraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _ProductGraph: Story = {};
