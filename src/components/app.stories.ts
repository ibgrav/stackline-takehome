import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./app";

const meta = {
  component: App,
  title: "Components/App"
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {}
};
