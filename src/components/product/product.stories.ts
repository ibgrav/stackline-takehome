import type { Meta, StoryObj } from "@storybook/react";
import { Product } from "./product";
import { mockProductData } from "./product.mock";

const meta = {
  component: Product
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _Product: Story = {
  // this data is mocked for testing purposes - if the api changes, the `/src/types/product.ts` file should be updated first
  // which will automatically invalidate the mock, ensuring that data is updated as well
  args: mockProductData
};
