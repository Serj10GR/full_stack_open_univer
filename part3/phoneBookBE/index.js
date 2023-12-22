require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const Person = require("./models/person");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

const customLogFormat = (tokens, request, response) => {
  const method = tokens.method(request, response);
  const url = tokens.url(request, response);
  const status = tokens.status(request, response);
  const responseTime = `${tokens["response-time"](request, response)} ms`;

  const requestBody =
    request.method === "POST" ? JSON.stringify(request.body) : "";

  return `${method} ${url} ${status} - ${responseTime} ${requestBody}`;
};

app.use(morgan(customLogFormat));

let persons = [];

app.get("/api/persons", (request, response) => {
  Person.find({}).then((people) => {
    response.json(people);
  });
});

app.get("/info", (request, response) => {
  Person.find({}).then((people) => {
    response.send(
      `<p>Phonebook has info for ${people.length} ${
        people.length === 1 ? "person" : "people"
      }</p><p>${new Date()}</p>`
    );
  });
});

// 3.3
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);

  if (person) {
    return response.json(person);
  }

  return response.status(404).end();
});

// 3.4
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);

  persons = persons.filter((p) => p.id !== id);

  response.status(204).end();
});

// 3.5
app.post("/api/persons/", (request, response) => {
  const body = request.body;

  const name = body?.name;
  const number = body?.number;

  // 3.6
  if (!name) {
    return response.status(400).json({
      error: "person name missing",
    });
  }

  if (!number) {
    return response.status(400).json({
      error: "person phone number missing",
    });
  }

  const newPerson = new Person({
    name,
    number,
  });

  newPerson.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
