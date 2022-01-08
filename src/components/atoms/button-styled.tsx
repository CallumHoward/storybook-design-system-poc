import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import {
  ButtonSizes,
  ButtonStyleProps,
  ButtonTypes,
  ButtonVariations,
} from "./button-meta";

const TYPE_BGCOLOR_MAP: Record<ButtonTypes, string> = {
  primary: "#6559FF",
  positive: "#098E56",
  negative: "#EB0027",
};

const TYPE_HOVERCOLOR_MAP: Record<ButtonTypes, string> = {
  primary: "#7A7DFF",
  positive: "#36BB84", // TODO missing from Figma
  negative: "#FF656C", // TODO missing from Figma
};

const SIZE_RADIUS_MAP: Record<ButtonSizes, string> = {
  large: "0.75rem",
  medium: "0.5rem",
  small: "0.375rem",
};

const SIZE_PADDING_MAP: Record<ButtonSizes, string> = {
  large: "0.75rem 1.5rem",
  medium: "0.5rem 1rem",
  small: "0.25rem 0.75rem",
};

const SIZE_HEIGHT_MAP: Record<ButtonSizes, string> = {
  large: "3rem",
  medium: "2.5rem",
  small: "2rem",
};

const getSizeStyle = (size: ButtonSizes) =>
  css({
    height: SIZE_HEIGHT_MAP[size],
    minWidth: SIZE_HEIGHT_MAP[size],
  });

const VARIATION_BGCOLOR_MAP: Record<ButtonVariations, string> = {
  filled: "",
  outline: "white",
  ghost: "none",
};

const typographyStyles = css`
  color: white;
  font-size: 0.875rem;
  font-weight: 400;
`;

const defaultStyles = css`
  max-width: 12rem;
  box-sizing: border-box;
  border: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  cursor: pointer;
  user-select: none;
`;

/**
 * All styled for Button composed here.
 * There should be no styling in Button FunctionComponent itself, only logic.
 */
export const StyledButton = styled.button<ButtonStyleProps>`
  ${typographyStyles}
  ${defaultStyles}

  /* Button size rules */
  /* ${(p) => getSizeStyle(p.size)} */
  ${(p) =>
    css({
      height: SIZE_HEIGHT_MAP[p.size],
      minWidth: SIZE_HEIGHT_MAP[p.size],
      padding: SIZE_PADDING_MAP[p.size],
      borderRadius: SIZE_RADIUS_MAP[p.size],
    })}

  /* Button type rules */
  background-color: ${(p) => TYPE_BGCOLOR_MAP[p.buttonType]};
  :hover {
    background-color: ${(p) =>
      p.variation === "filled" && TYPE_HOVERCOLOR_MAP[p.buttonType]};
  }

  /* Button variation rules */
  /* Intentionally takes precedence over background-color set by buttonType above */
  background: ${(p) => VARIATION_BGCOLOR_MAP[p.variation]};
  color: ${(p) => p.variation !== "filled" && "#4740D4"};
  border: ${(p) => p.variation === "outline" && "solid 1px #D0D6E1"};
`;
