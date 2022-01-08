import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "./input";

type Meta = ComponentMeta<typeof Input>;
type Story = ComponentStoryObj<typeof Input>;

const meta: Meta = {
  component: Input,
};
export default meta;

const Base: Story = {
  args: {
    label: "Input",
    onClick: action("input-click"),
  },
};

export const Primary: Story = {
  args: {
    ...Base.args,
    primary: true,
  },
};

export const Secondary: Story = {
  ...Base,
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
