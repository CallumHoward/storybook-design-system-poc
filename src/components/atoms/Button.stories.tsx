import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import styled from "styled-components";
import { Button } from "./Button";
import {
  BUTTON_SIZES,
  BUTTON_STATES,
  BUTTON_TYPES,
  BUTTON_VARIATIONS,
} from "./button-meta";

type Meta = ComponentMeta<typeof Button>;
type Story = ComponentStoryObj<typeof Button>;

const meta: Meta = {
  component: Button,
};
export default meta;

const LayoutWrapper = styled.div`
  & > * {
    margin: 2rem;
  }
`;

export const Component: Story = {
  args: {
    dataAnchor: "sckit2-button",
    children: "Button",
    onClick: action("button-click"),
  },
  decorators: [(story) => <LayoutWrapper>{story()}</LayoutWrapper>],
};

export const Sizes: Story = {
  ...Component,
  render: (args) => (
    <>
      {BUTTON_SIZES.map((size) => (
        <Button
          {...args}
          dataAnchor={`sckit-button-${size}`}
          key={size}
          size={size}
        />
      ))}
    </>
  ),
};

export const Types: Story = {
  ...Component,
  render: (args) => (
    <>
      {BUTTON_TYPES.map((type) => (
        <Button
          {...args}
          dataAnchor={`sckit-button-${type}`}
          key={type}
          buttonType={type}
        />
      ))}
    </>
  ),
};

export const Variations: Story = {
  ...Component,
  render: (args) => (
    <>
      {BUTTON_VARIATIONS.map((variation) => (
        <Button
          {...args}
          dataAnchor={`sckit-button-${variation}`}
          key={variation}
          variation={variation}
        />
      ))}
    </>
  ),
};

export const States: Story = {
  ...Component,
  render: (args) => (
    <>
      {BUTTON_STATES.map((state) => (
        <Button
          {...args}
          dataAnchor={`sckit-button-${state}`}
          key={state}
          state={state}
        />
      ))}
    </>
  ),
};

// TODO Icons
