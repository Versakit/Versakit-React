import type { ReactNode } from "react";
import "../styles/button.css";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={`versakit-button ${variant}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
