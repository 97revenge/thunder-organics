import Home from "../../../screens/home";

import { Meta, StoryObj } from "@storybook/react";
import { PropsMode } from "../../components/props/PropsMode";

const meta = {
  title: "screens/home",
  component: Home,
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const lightMode: Story = {
  args: {
    primary: true,
    theme: "light",
    size: "large",
  } satisfies PropsMode<boolean | string>,
};

export const darkMode: Story = {
  args: {
    primary: false,
    theme: "dark",
    size: "large",
  } satisfies PropsMode<boolean | string>,
};
