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
  onClick = () => null,
  children,
  ...props
}) => {
  const propsWithDefaults: ButtonStyleProps = { size, buttonType, variation, state };
  return (
    <StyledButton type="button" {...propsWithDefaults} {...props}>
      {children}
    </StyledButton>
  );
};
