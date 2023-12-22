import axios from "axios";
import { Person } from "./types/person";
const baseUrl = "https://phone-book-4vfv.onrender.com/api/persons"; // "http://localhost:3001/api/persons";

const getAll = () => {
  return axios.get<Array<Person>>(baseUrl).then((res) => res.data);
};

const create = (newPerson: Omit<Person, "id">) => {
  const request = axios.post<Person>(baseUrl, newPerson);
  return request.then((response) => response.data);
};

const deletePerson = (id: number) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const update = (updatedPerson: Person) => {
  const request = axios.put<Person>(
    `${baseUrl}/${updatedPerson.id}`,
    updatedPerson
  );
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  deletePerson,
  update,
};
