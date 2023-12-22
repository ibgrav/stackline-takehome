import type { Meta, StoryObj } from "@storybook/react";
import { Product } from "./product";
import { rest } from "msw";
import { PRODUCTS_API_PATH } from "@/lib/constants";
import { reduxDecorator } from ".storybook/decorators";

const meta = {
  title: "Product",
  component: Product
} satisfies Meta<typeof Product>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [reduxDecorator]
};

export const Error: Story = {
  decorators: [reduxDecorator],
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
