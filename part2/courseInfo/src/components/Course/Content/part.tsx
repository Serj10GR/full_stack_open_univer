export type Part = {
  name: string;
  exercises: number;
  id: number;
};

type PartProps = {
  part: Part;
};

export const Part = ({ part }: PartProps) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};
