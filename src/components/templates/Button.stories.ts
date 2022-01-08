import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

type Meta = ComponentMeta<typeof Button>;
type Story = ComponentStoryObj<typeof Button>;

const meta: Meta = {
  component: Button,
};
export default meta;

const Base: Story = {
  args: {
    label: "Button",
    onClick: action("button-click"),
  },
};

export const Primary: Story = {
  args: {
    ...Base.args,
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    ...Base.args,
  },
};

export const Large: Story = {
  args: {
    ...Base.args,
    size: "large",
  },
};

export const Small: Story = {
  args: {
    ...Base.args,
    size: "small",
  },
};
