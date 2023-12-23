import "@/main.css";

import type { Preview } from "@storybook/react";
import { initialize as initializeMsw, mswLoader } from "msw-storybook-addon";
import { rest } from "msw";
import { PRODUCTS_API_PATH } from "@/lib/constants";
import { mockProductData } from "@/components/product/product.mock";

// msw was intercepting vite requists, so we need to bypass it
initializeMsw({ onUnhandledRequest: () => "bypass" });

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        // any additional api requests could be mocked here
        // these can be overwritten in individual stories
        rest.get(`/api/${PRODUCTS_API_PATH}`, (_, res, ctx) => {
          return res(ctx.json([mockProductData]));
        })
      ]
    }
  }
};

export default preview;
