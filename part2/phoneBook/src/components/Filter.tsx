import { Input } from "./Input";

type FilterProps = {
  onQueryChange: (query: string) => void;
};

export const Filter = ({ onQueryChange }: FilterProps) => {
  return (
    <Input
      label="Search person by name"
      onChange={(e) => onQueryChange(e.target.value)}
    />
  );
};
