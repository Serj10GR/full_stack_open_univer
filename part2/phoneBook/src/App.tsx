import { FormEvent, useEffect, useState } from "react";
import { Person } from "./types/person";
import { Filter } from "./components/Filter";
import PersonForm from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personService from "./services";

const App = () => {
  const [persons, setPersons] = useState<Array<Person>>([]);
  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addPerson = (event: FormEvent) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newPhone,
    };

    const alreadySavedPerson = persons.find((p) => p.name === newPerson.name);

    if (alreadySavedPerson) {
      if (
        window.confirm(
          `${alreadySavedPerson.name} is already added to phonebook, replace the old number with new one ?`
        )
      ) {
        personService
          .update({
            ...alreadySavedPerson,
            number: newPerson.number,
          })
          .then((updatedPerson) => {
            setPersons([
              ...persons.map((p) =>
                p.id !== alreadySavedPerson.id ? p : updatedPerson
              ),
            ]);
          })
          .catch((error: Error) => {
            window.alert(error.message);
          });
      }
      setNewName("");
      setNewPhone("");
      return;
    }

    personService.create(newPerson).then((newCreatedPerson) => {
      setNewName("");
      setNewPhone("");
      setPersons((prevPersons) => [...prevPersons, newCreatedPerson]);
    });
  };

  useEffect(() => {
    personService.getAll().then((res) => setPersons(res));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onQueryChange={setQuery} />

      <h2>Add new person</h2>
      <PersonForm
        nameValue={newName}
        phoneValue={newPhone}
        onNameChange={setNewName}
        onPhoneChange={setNewPhone}
        onAddPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} query={query} setPersonsState={setPersons} />
    </div>
  );
};

export default App;
