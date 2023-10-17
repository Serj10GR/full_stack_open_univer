import { FormEvent, useState } from "react";
import { Person } from "./types/person";
import { Filter } from "./components/Filter";
import PersonForm from "./components/PersonForm";
import { Persons } from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState<Array<Person>>([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addPerson = (event: FormEvent) => {
    event.preventDefault();

    const newPerson: Person = {
      name: newName,
      phone: newPhone,
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
