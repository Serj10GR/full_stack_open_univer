import { Part } from "./Content/part";

type TotalProps = {
  parts: Array<Part>;
};

export const Total = ({ parts }: TotalProps) => {
  const calcTotal = (parts: Array<Part>) => {
    return parts.reduce((total, part) => total + part.exercises, 0);
  };

  return (
    <p style={{ fontWeight: "700" }}>Number of exercises {calcTotal(parts)}</p>
  );
};
