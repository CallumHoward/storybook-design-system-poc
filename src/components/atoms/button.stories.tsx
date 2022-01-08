import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import styled from "styled-components";
import { storyDoc } from "../helpers";
import { Button } from "./button";
import {
    BUTTON_SIZES,
    BUTTON_STATES,
    BUTTON_TYPES,
    BUTTON_VARIATIONS
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
  ...storyDoc(
    `The most commonly used size should be the \`"medium"\` size. Buttons are
    rendered in CSS with inline styling, and so they can work alongside text
    without additional styling overrides.`
  ),
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
  ...storyDoc(
    `Types are used to visually distinguish a button's role, and is set by the
    \`buttonTypes\` prop. A \`negative\` button type may be used to indicate an
    action that can not easily be undone, such as in a [confirmation
    dialog](#).`
  ),
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
  ...storyDoc(
    `Typically there should only be one filled variation button in an adjacent
    group of buttons. Ghost button should be used either adjacent alongside a
    button of another type, or where a user would expect a button from the
    context (as opposed to a link). For links inline with surrounding text, use
    the \`<Link />\` from the [typography](#) collection.`
  ),
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
  ...storyDoc(
    `Regarding button focus behavior, see [MDN docs for HTML
    button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus)
    for a note on disparity between browsers and OSes.`
  ),
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
      {/* TODO add an interactive one */}
    </>
  ),
};

// TODO Icons
