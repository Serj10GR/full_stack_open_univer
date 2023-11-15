import personService from "../services";
import { Person } from "../types/person";

type DeletePersonProps = {
  personid: number;
  setPersonsState: (persons: Array<Person>) => void;
  persons: Array<Person>;
};

export const DeletePerson = ({
  personid,
  setPersonsState,
  persons,
}: DeletePersonProps) => {
  const currentPerson = persons.find((p) => p.id === personid);
  const handleDelete = () => {
    if (window.confirm(`Delete ${currentPerson?.name}`)) {
      personService
        .deletePerson(personid)
        .then(() =>
          setPersonsState([...persons.filter((p) => p.id !== personid)])
        )
        .catch((error: Error) => {
          window.alert(error.message);
        });
    }
  };
  return (
    <button onClick={handleDelete} type="button">
      delete
    </button>
  );
};
