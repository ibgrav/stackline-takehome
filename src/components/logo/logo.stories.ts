import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo";

const meta = {
  title: "Logo",
  component: Logo,
  parameters: {
    layout: "centered"
  }
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _Logo: Story = {
  args: {
    className: "w-40",
    pathClassName: "fill-primary"
  }
};
