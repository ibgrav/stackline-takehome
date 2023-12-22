import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag";

const meta = {
  title: "Tag",
  component: Tag,
  parameters: {
    layout: "centered"
  }
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _Tag: Story = {
  args: {
    text: "This is a tag"
  }
};
