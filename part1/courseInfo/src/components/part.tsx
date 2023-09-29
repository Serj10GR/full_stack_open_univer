export type Part = {
  name: string;
  exercises: number;
};

export const Part = ({ name, exercises }: Part) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
