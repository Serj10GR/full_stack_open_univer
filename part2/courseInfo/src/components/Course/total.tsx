import { Part } from "./Content/part";

type TotalProps = {
  parts: Array<Part>;
};

export const Total = ({ parts }: TotalProps) => {
  const calcTotal = (parts: Array<Part>) => {
    let total = 0;

    parts.forEach((part) => {
      total = part.exercises + total;
    });

    return total;
  };
  return <p>Number of exercises {calcTotal(parts)}</p>;
};
