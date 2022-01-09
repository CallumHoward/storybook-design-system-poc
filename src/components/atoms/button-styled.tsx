import styled, { css } from "styled-components";
import { Property } from "csstype";

import {
  ButtonSizes,
  ButtonStyleProps,
  ButtonTypes,
  ButtonVariations,
} from "./button-meta";

const TYPE_BGCOLOR_MAP: Record<ButtonTypes, Property.BackgroundColor> = {
  primary: "#6559FF",
  positive: "#098E56",
  negative: "#EB0027",
};

const TYPE_HOVER_BGCOLOR_MAP: Record<ButtonTypes, Property.BackgroundColor> = {
  primary: "#7A7DFF",
  positive: "#36BB84", // TODO missing from Figma
  negative: "#FF656C", // TODO missing from Figma
};

const TYPE_ACTIVE_BGCOLOR_MAP: Record<ButtonTypes, Property.BackgroundColor> = {
  primary: "#4740D4",
  positive: "#076F43", // TODO missing from Figma
  negative: "#CC0007", // TODO missing from Figma
};

const SIZE_RADIUS_MAP: Record<ButtonSizes, Property.BorderRadius> = {
  large: "0.75rem",
  medium: "0.5rem",
  small: "0.375rem",
};

const SIZE_PADDING_MAP: Record<ButtonSizes, Property.Padding> = {
  large: "0.75rem 1.5rem",
  medium: "0.5rem 1rem",
  small: "0.25rem 0.75rem",
};

export const SIZE_HEIGHT_MAP: Record<ButtonSizes, Property.Height> = {
  large: "3rem",
  medium: "2.5rem",
  small: "2rem",
};

const getSizeStyles = (p: ButtonStyleProps) =>
  css({
    height: SIZE_HEIGHT_MAP[p.size],
    minWidth: SIZE_HEIGHT_MAP[p.size],
    padding: SIZE_PADDING_MAP[p.size],
    borderRadius: SIZE_RADIUS_MAP[p.size],
  });

const VARIATION_BG_MAP: Record<ButtonVariations, Property.Background> = {
  filled: "",
  outline: "white",
  ghost: "none",
};

const VARIATION_BORDER_MAP: Record<ButtonVariations, Property.Border> = {
  filled: "solid 1px",
  outline: "solid 1px #D0D6E1",
  ghost: "solid 1px #4740D400",
};

const typographyStyles = css`
  color: white;
  font-size: 0.875rem;
  font-weight: 400;
`;

const baseStyles = css`
  max-width: 12rem;
  box-sizing: border-box;
  border: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  cursor: pointer;
  user-select: none;

  transition: all 200ms ease;
`;

/**
 * All styled for Button composed here.
 * There should be no styling in Button FunctionComponent itself, only logic.
 */
export const StyledButton = styled.button<ButtonStyleProps>`
  ${typographyStyles}
  ${baseStyles}
  ${getSizeStyles}

  /* Button type and variation rules */
  background-color: ${(p) => TYPE_BGCOLOR_MAP[p.buttonType]};
  :hover {
    background-color: ${(p) =>
      p.variation === "filled" && TYPE_HOVER_BGCOLOR_MAP[p.buttonType]};
  }
  /* background rule intentionally overrides background-color rule above */
  background: ${(p) => VARIATION_BG_MAP[p.variation]};
  color: ${(p) => p.variation !== "filled" && "#4740D4"};
  border: ${(p) => VARIATION_BORDER_MAP[p.variation]};
  :hover {
    border: ${(p) => p.variation === "ghost" && VARIATION_BORDER_MAP.filled};
  }

  :active {
    background: ${(p) => TYPE_ACTIVE_BGCOLOR_MAP[p.buttonType]};
  }

  :disabled {
    background: #f3f6fb;
    border-color: #f3f6fb;
    color: #8692a7;
  }
`;
