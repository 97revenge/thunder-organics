import { StoryObj, Meta } from "@storybook/react";

import ButtonUsage from "../../../../components/button/material-ui-button";

const meta = {
  title: "material-ui-template/button",
  component: ButtonUsage,
} satisfies Meta<typeof ButtonUsage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultTheme: Story = {
  args: {
    primary: true,
    theme: "light",
    size: "small",
  } satisfies any,
};
