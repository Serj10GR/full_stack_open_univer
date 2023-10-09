import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...otherProps }: ButtonProps) => {
  return <button {...otherProps}>{text}</button>;
};
