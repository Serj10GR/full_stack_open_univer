import { FormEvent, useEffect, useState } from "react";
import { Person } from "./types/person";
import { Filter } from "./components/Filter";
import PersonForm from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personService from "./services";
import { Notification, NotificationMessage } from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState<Array<Person>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [message, setMessage] = useState<Notification | null>(null);

  const showMessage = (notification: Notification) => {
    setMessage(notification);

    // hide info after 5 sec
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

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
            showMessage({
              message: `Updated ${updatedPerson.name}`,
              type: "success",
            });
          })
          .catch(() => {
            showMessage({
              message: `Information of ${alreadySavedPerson.name} has already been removed from the server.`,
              type: "error",
            });
          });
      }
      setNewName("");
      setNewPhone("");
      return;
    }

    personService
      .create(newPerson)
      .then((newCreatedPerson) => {
        setNewName("");
        setNewPhone("");
        setPersons((prevPersons) => [...prevPersons, newCreatedPerson]);
        showMessage({
          message: `Added ${newCreatedPerson.name}`,
          type: "success",
        });
      })
      .catch((error) => {
        console.log('eeeee', error)
        showMessage({
          message: `Error: ${error.response.data.error}`,
          type: "error",
        });
      });
  };

  useEffect(() => {
    personService
      .getAll()
      .then((res) => {
        setPersons(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onQueryChange={setQuery} />
      <NotificationMessage {...message} />

      <h2>Add new person</h2>
      <PersonForm
        nameValue={newName}
        phoneValue={newPhone}
        onNameChange={setNewName}
        onPhoneChange={setNewPhone}
        onAddPerson={addPerson}
      />
      <h2>Numbers</h2>
      {isLoading ? (
        "...Loading"
      ) : (
        <Persons persons={persons} query={query} setPersonsState={setPersons} />
      )}
    </div>
  );
};

export default App;
