import type { Meta, StoryObj } from "@storybook/react";
import { ProductDetails } from "./product-details";
import { mockProductData } from "../product.mock";

const meta = {
  component: ProductDetails
} satisfies Meta<typeof ProductDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: mockProductData
};
