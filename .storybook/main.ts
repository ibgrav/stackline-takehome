import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  staticDirs: ["../public", "./public"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "msw-storybook-addon"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  }
};

export default config;
