import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  staticDirs: ["../public", "./public"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "msw-storybook-addon"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ["msw-storybook-addon"]
      }
    });
  }
};

export default config;
