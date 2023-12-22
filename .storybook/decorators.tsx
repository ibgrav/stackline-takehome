import type { Decorator } from "@storybook/react";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "@/store/create-store";

export const reduxDecorator: Decorator = (Story) => {
  return (
    <ReduxProvider store={createStore()}>
      <Story />
    </ReduxProvider>
  );
};
