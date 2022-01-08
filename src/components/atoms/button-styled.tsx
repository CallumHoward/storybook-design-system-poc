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

const SIZE_STYLE_MAP: Record<ButtonSizes, FlattenSimpleInterpolation> = {
  large: css`
    height: ${SIZE_HEIGHT_MAP.large};
    min-width: ${SIZE_HEIGHT_MAP.large};
  `,
  medium: css`
    height: ${SIZE_HEIGHT_MAP.medium};
    min-width: ${SIZE_HEIGHT_MAP.medium};
  `,
  small: css`
    height: ${SIZE_HEIGHT_MAP.small};
    min-width: ${SIZE_HEIGHT_MAP.small};
  `,
};

const VARIATION_BGCOLOR_MAP: Record<ButtonVariations, string> = {
  filled: "",
  outline: "white",
  ghost: "none",
};

const typographyStyles = css`
  color: white;
  font-size: 14px;
  font-weight: 400;
`;

const defaultStyles = css`
  box-sizing: border-box;
  border: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 12rem;
  cursor: pointer;
`;

/**
 * All styled for Button composed here.
 * There should be no styling in Button FunctionComponent itself, only logic.
 */
export const StyledButton = styled.button<ButtonStyleProps>`
  ${typographyStyles}
  ${defaultStyles}

  ${(p) => SIZE_STYLE_MAP[p.size]}
  padding: ${(p) => SIZE_PADDING_MAP[p.size]};
  border-radius: ${(p) => SIZE_RADIUS_MAP[p.size]};

  background-color: ${(p) => TYPE_BGCOLOR_MAP[p.buttonType]};

  // Intentionally takes precedence over background-color set by buttonType above
  background: ${(p) => VARIATION_BGCOLOR_MAP[p.variation]};
  color: ${(p) => p.variation !== "filled" && "#4740D4"};
  border: ${(p) => p.variation === "outline" && "solid 1px #D0D6E1"};
`;
