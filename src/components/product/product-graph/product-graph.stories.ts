import type { Meta, StoryObj } from "@storybook/react";
import { ProductGraph } from "./product-graph";

const meta = {
  component: ProductGraph
} satisfies Meta<typeof ProductGraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _ProductGraph: Story = {};
