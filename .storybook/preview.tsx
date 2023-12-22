import "@/main.css";

import type { Preview } from "@storybook/react";
import { initialize as initializeMsw, mswLoader } from "msw-storybook-addon";
import { rest } from "msw";
import { PRODUCTS_API_PATH } from "@/lib/constants";
import { mockProductData } from "@/components/product/product.mock";

initializeMsw();

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        rest.get(`/api/${PRODUCTS_API_PATH}`, (_, res, ctx) => {
          return res(ctx.json([mockProductData]));
        })
      ]
    }
  }
};

export default preview;
