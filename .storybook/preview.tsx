import { Providers } from "@/components/providers/providers";
import "@/main.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      // add redux provider to the app - this is also done in src/main.tsx
      <Providers>
        <Story />
      </Providers>
    )
  ]
};

export default preview;
