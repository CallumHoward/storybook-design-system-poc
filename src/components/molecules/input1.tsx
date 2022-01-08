import { FunctionComponent } from "react";

type InputProps = {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the input be? */
  size?: "small" | "medium" | "large";
  /** Input contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
};

/**
 * 🚧  --- Coming Soon ---🚧
 */
export const Input: FunctionComponent<InputProps> = ({
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <input
      type="input"
      style={{ backgroundColor }}
      {...props}
    />
  );
};
