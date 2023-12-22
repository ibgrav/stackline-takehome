import type { Meta, StoryObj } from "@storybook/react";
import { ProductDetails } from "./product-details";
import { reduxDecorator } from ".storybook/decorators";
import { renderGetProductsQuery } from ".storybook/renderers";

const meta = {
  title: "Product Details",
  component: ProductDetails,
  decorators: [reduxDecorator],
  render: renderGetProductsQuery(ProductDetails)
} satisfies Meta<typeof ProductDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _ProductDetails: Story = {};
