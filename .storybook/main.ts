import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  staticDirs: ["../public", "./public"], // only include the msw worker in the storybook build
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "msw-storybook-addon"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag" // enable docs for stories with tags: ["autodocs"]
  },
  viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        // additional dev-only dependencies could be added to improve dev speed
        include: ["msw-storybook-addon"]
      },
      build: {
        chunkSizeWarningLimit: 1000
      }
    });
  }
};

export default config;
