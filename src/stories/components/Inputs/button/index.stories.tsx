import { Meta, StoryObj } from "@storybook/react";

import { ButtonOf } from "../../../../components/Inputs/button";

const meta = {
  title: "Input/button",
  component: ButtonOf,
} satisfies Meta<typeof ButtonOf>;

export default meta;

type Story = StoryObj<typeof ButtonOf>;

export const primary: Story = {
  args: {
    children: "Login",
  },
};
