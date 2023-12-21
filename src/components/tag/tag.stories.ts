import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag";

const meta = {
  component: Tag,
  title: "Components/Tag",
  parameters: {
    layout: "centered"
  }
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: "This is a tag"
  }
};
