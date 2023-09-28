import { MaterialNav as nav } from "../../../../components/Layouts/nav";

import { Meta, StoryObj } from "@storybook/react";

import { PropsMode } from "../../props/PropsMode";

const meta = {
  title: "components/nav",
  component: nav,
} satisfies Meta<typeof nav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const lightMode: Story = {
  args: {
    children: true,
  } satisfies Partial<PropsMode<string | boolean>>,
};
export const darkMode: Story = {
  args: {
    children: true,
  } satisfies Partial<PropsMode<string | boolean>>,
};
