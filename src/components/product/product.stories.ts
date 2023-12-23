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
  // using separate story decorators that both call `createStore` allows for separate state between stories
  // otherwise, when Default is renders, the Error story will show a success response because the store has already been populated
  decorators: [reduxDecorator],
  parameters: {
    msw: {
      handlers: [
        // overrite the default mock handler to return an error response
        rest.get(`/api/${PRODUCTS_API_PATH}`, (_, res, ctx) => {
          return res(ctx.status(500));
        })
      ]
    }
  }
};
