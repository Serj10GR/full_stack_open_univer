import { Part } from "./part";

type ContentProps = {
  parts: Array<{
    name: string;
    nr: number;
  }>;
};

export const Content = ({ parts }: ContentProps) => {
  return (
    <div>
      {parts.map((p) => (
        <Part key={p.name} name={p.name} nr={p.nr} />
      ))}
    </div>
  );
};
