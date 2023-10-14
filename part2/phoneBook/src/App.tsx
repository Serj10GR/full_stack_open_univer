import { FormEvent, useState } from "react";
import { Input } from "./components/Input";
import { Person } from "./types/person";

const App = () => {
  const [persons, setPersons] = useState<Array<Person>>([
    { name: "Arto Hellas", phone: "+123-3455-333" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addPerson = (event: FormEvent) => {
    event.preventDefault();

    const newPerson: Person = { name: newName, phone: newPhone };

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
      <form onSubmit={addPerson}>
        <Input
          required
          label="name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <Input
          required
          label="phone"
          onChange={(e) => setNewPhone(e.target.value)}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name, phone }) => (
        <p key={name}>{`${name} ${phone}`}</p>
      ))}
    </div>
  );
};

export default App;
