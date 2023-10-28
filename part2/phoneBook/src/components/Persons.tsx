import { Person } from "../types/person";

type PersonsProps = {
  persons: Array<Person>;
  query: string;
};

export const Persons = ({ persons, query }: PersonsProps) => {
  const fileredPersonsByQuery = persons.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );
  return fileredPersonsByQuery.length > 0 ? (
    fileredPersonsByQuery.map(({ name, number }) => (
      <p key={name}>{`${name} ${number}`}</p>
    ))
  ) : (
    <p>No persons found for {query}</p>
  );
};
