import { FormEvent, useEffect, useState } from "react";
import { Person } from "./types/person";
import { Filter } from "./components/Filter";
import PersonForm from "./components/PersonForm";
import { Persons } from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState<Array<Person>>([]);
  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addPerson = (event: FormEvent) => {
    event.preventDefault();

    const newPerson: Person = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    };

    const savedNames = persons.map((person) => person.name);

    const isPersonAlreadyPresent = savedNames.includes(newPerson.name);

    if (isPersonAlreadyPresent) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }

    setPersons((prevPersons) => [...prevPersons, newPerson]);
  };

  useEffect(() => {
    axios
      .get<Array<Person>>("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onQueryChange={setQuery} />

      <h2>Add new person</h2>
      <PersonForm
        onNameChange={setNewName}
        onPhoneChange={setNewPhone}
        onAddPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} query={query} />
    </div>
  );
};

export default App;
