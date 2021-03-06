import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { fireEvent, queryAllByTestId } from "@storybook/testing-library";
import { withDesign } from "storybook-addon-designs";
import styled from "styled-components";
import { figmaFrame, storyDoc } from "../helpers";
import { Button } from "./button";
import {
  BUTTON_SIZES,
  BUTTON_STATES,
  BUTTON_TYPES,
  BUTTON_VARIATIONS,
} from "./button-meta";
import { SIZE_HEIGHT_MAP } from "./button-styled";

type Meta = ComponentMeta<typeof Button>;
type Story = ComponentStoryObj<typeof Button>;

const meta: Meta = {
  component: Button,
  decorators: [withDesign],
  parameters: {
    ...figmaFrame(
      "https://www.figma.com/file/CJcm1w57PH5evALx1wztMO/Canopy--%3E-Product?node-id=1%3A154"
    ),
    iframe: {
      url: "https://canopy.safetyculture.com/",
    },
  },
};
export default meta;

const STORY_PADDING = 2;
const LayoutWrapper = styled.div`
  min-height: calc(${SIZE_HEIGHT_MAP["large"]} + ${2 * STORY_PADDING}rem);
  display: flex;
  align-items: center;
  & > * {
    margin: ${STORY_PADDING}rem;
  }
`;

export const Component: Story = {
  args: {
    dataAnchor: "sckit-button",
    children: "Button",
    onClick: action("button-click"),
  },
  decorators: [(story) => <LayoutWrapper>{story()}</LayoutWrapper>],
  play: async ({ canvasElement }) => {
    const buttons = queryAllByTestId(canvasElement, "sckit-button", { exact: false });
    buttons.forEach((button) =>{
      fireEvent.click(button);
    })
  },
};

export const Sizes: Story = {
  ...Component,
  ...storyDoc(
    `The most commonly used size should be the \`"medium"\` size. Buttons are
    rendered in CSS with inline styling, and so they can work alongside text
    without additional styling overrides. The minimum button width (empty
    label) maintains a 1:1 aspect ratio between width and height.`
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
    `Ghost buttons should be reserved for cases where the button will not be disabled.  
    Regarding button focus behavior, see [MDN docs for HTML
    button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus)
    for a note on disparity between browsers and operating systems.`
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
    </>
  ),
};

// TODO Icons
