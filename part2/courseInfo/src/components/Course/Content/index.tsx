import { Part } from "./part";

type ContentProps = {
  parts: Array<Part>;
};

export const Content = ({ parts }: ContentProps) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};
