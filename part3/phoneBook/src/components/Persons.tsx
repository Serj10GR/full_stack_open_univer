import { Person } from "../types/person";
import { DeletePerson } from "./DeletePerson";

type PersonsProps = {
  persons: Array<Person>;
  query: string;
  setPersonsState: (persons: Array<Person>) => void;
};

export const Persons = ({ persons, query, setPersonsState }: PersonsProps) => {
  const fileredPersonsByQuery = persons.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );
  return fileredPersonsByQuery.length > 0 ? (
    fileredPersonsByQuery.map(({ name, number, id }) => (
      <div key={id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <p>{`${name} ${number}`}</p>
        <DeletePerson
          personid={id}
          setPersonsState={setPersonsState}
          persons={persons}
        />
      </div>
    ))
  ) : (
    <p>No persons found for {query}</p>
  );
};
