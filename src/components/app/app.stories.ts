import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { App } from "./app";
import { reduxDecorator } from ".storybook/decorators";

const meta = {
  title: "App",
  component: App,
  decorators: [reduxDecorator]
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _App: Story = {
  play: async (ctx) => {
    const canvas = within(ctx.canvasElement);

    const h1 = canvas.getByRole("heading", { level: 1 });
    await expect(h1).toHaveTextContent("Stackline Takehome");
  }
};
