import { FunctionComponent } from "react";
import styled from "styled-components";

export const BUTTON_TYPES = ["primary", "positive", "negative"] as const;
export const BUTTON_SIZES = ["small", "medium", "large"] as const;
export const BUTTON_VARIATIONS = ["filled", "outline", "ghost"] as const;
export const BUTTON_STATES = [
  "default",
  "active",
  "hover",
  "pressed",
  "disabled",
  "loading",
] as const;

type ButtonTypes = typeof BUTTON_TYPES[number];
type ButtonSizes = typeof BUTTON_SIZES[number];
type ButtonVariations = typeof BUTTON_VARIATIONS[number];
type ButtonStates = typeof BUTTON_STATES[number];

type ButtonProps = {
  /** Anchor for targeting with automation */
  dataAnchor: string; // TODO achieve with forward-ref only?
  /** Size and spaciousness */
  size?: ButtonSizes;
  /** Role type of the button */
  type?: ButtonTypes;
  /** Style variations */
  variation?: ButtonVariations;
  /** Visual state of the button */
  state?: ButtonStates;
  /** Optional click handler */
  onClick?: () => void;
};

const StyledButton = styled.button``;

/**
 * Primary UI component for user interaction
 */
export const Button: FunctionComponent<ButtonProps> = ({
  size = "medium",
  type = "primary",
  variation = "filled",
  state = "default",
  onClick = () => null,
  children,
  ...props
}) => {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};
