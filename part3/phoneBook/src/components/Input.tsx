import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...inputProps }: InputProps) => {
  return (
    <div>
      {label}: <input {...inputProps} />
    </div>
  );
};
