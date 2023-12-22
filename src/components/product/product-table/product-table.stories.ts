import type { Meta, StoryObj } from "@storybook/react";
import { ProductTable } from "./product-table";

const meta = {
  component: ProductTable
} satisfies Meta<typeof ProductTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _ProductGraph: Story = {};
