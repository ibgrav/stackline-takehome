import "@/main.css";

import type { Preview } from "@storybook/react";
import { initialize as initializeMsw, mswLoader } from "msw-storybook-addon";
import { Provider as ReduxProvider } from "react-redux";
import { rest } from "msw";
import { store } from "@/store/store";
import { PRODUCTS_API_PATH } from "@/lib/constants";
import { mockProductData } from "@/components/product/product.mock";

initializeMsw();

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    layout: "fullscreen",
    // options: {
    //   storySort: {
    //     method: "alphabetical"
    //   }
    // },
    msw: {
      handlers: [
        rest.get(`/api/${PRODUCTS_API_PATH}`, (_, res, ctx) => {
          return res(ctx.json([mockProductData]));
        })
      ]
    }
  },
  decorators: [
    (Story) => (
      // add redux provider to the app - this is also done in src/main.tsx
      <ReduxProvider store={store}>
        <Story />
      </ReduxProvider>
    )
  ]
};

export default preview;
