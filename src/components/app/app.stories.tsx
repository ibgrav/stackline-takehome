import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import { App } from "./app";
import { PRODUCTS_API_PATH } from "@/lib/constants";

const meta = {
  component: App
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _App: Story = {};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(`/api/${PRODUCTS_API_PATH}`, (_, res, ctx) => {
          return res(ctx.status(500));
        })
      ]
    }
  }
};
