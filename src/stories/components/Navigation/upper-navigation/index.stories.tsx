import { Meta, StoryObj } from "@storybook/react";

import UpperNavigation from "../../../../components/Navigation/upper-navigation";

const meta = {
  title: "Navigation/upper-navigation",
  component: UpperNavigation,
} satisfies Meta<typeof UpperNavigation>;

export default meta;

type Story = StoryObj<typeof UpperNavigation>;

export const primary: Story = {
  args: {
    params: true,
  },
};
