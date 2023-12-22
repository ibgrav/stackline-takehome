import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./app";
import { reduxDecorator } from ".storybook/decorators";

const meta = {
  title: "App",
  component: App,
  decorators: [reduxDecorator]
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _App: Story = {};
