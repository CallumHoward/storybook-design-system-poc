import { FunctionComponent } from "react";
import { ButtonProps, ButtonStyleProps } from "./button-meta";
import { StyledButton } from "./button-styled";

/**
 * Primary UI component for user interaction
 */
export const Button: FunctionComponent<ButtonProps> = ({
  size = "medium",
  buttonType = "primary",
  variation = "filled",
  state = "default",
  children,
  ...props
}) => {
  const propsForStyleWithDefaults: ButtonStyleProps = {
    size,
    buttonType,
    variation,
    state,
  };

  return (
    <StyledButton
      type="button"
      disabled={state === "disabled" || state === "loading"}
      {...propsForStyleWithDefaults}
      {...props}
    >
      {state !== "loading" ? children : "Loading..."}
    </StyledButton>
  );
};
