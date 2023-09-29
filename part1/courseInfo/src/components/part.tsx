type PartProps = {
  name: string;
  nr: number;
};

export const Part = ({ name, nr }: PartProps) => {
  return (
    <p>
      {name} {nr}
    </p>
  );
};
