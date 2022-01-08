export const BUTTON_TYPES = ["primary", "positive", "negative"] as const;
export const BUTTON_SIZES = ["large", "medium", "small"] as const;
export const BUTTON_VARIATIONS = ["filled", "outline", "ghost"] as const;
export const BUTTON_STATES = [
  "default",
  "active",
  "hover",
  "pressed",
  "disabled",
  "loading",
] as const;

export type ButtonTypes = typeof BUTTON_TYPES[number];
export type ButtonSizes = typeof BUTTON_SIZES[number];
export type ButtonVariations = typeof BUTTON_VARIATIONS[number];
export type ButtonStates = typeof BUTTON_STATES[number];

/**
 * Style props are intentionally constrained. If you absolutely must have a
 * different style for a specific use case, wrap and extend Button using
 * `styled(Button)` within your feature.
 */
export type ButtonStyleProps = {
  /** Size and spaciousness */
  size: ButtonSizes;
  /** Role type of the button */
  buttonType: ButtonTypes;
  /** Style variations */
  variation: ButtonVariations;
  /** Visual state of the button */
  state: ButtonStates;
};

export type ButtonProps = {
  /** Anchor for targeting with automation */
  dataAnchor: string; // TODO achieve with forward-ref only?
  /** Optional click handler, fired on mouse-up/touch-up */
  onClick?: () => void;
} & Partial<ButtonStyleProps>;
