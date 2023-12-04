const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

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

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`
  );
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
  const names = persons.map((p) => p.name);

  // 3.6
  if (!body?.name) {
    return response.status(400).json({
      error: "person name missing",
    });
  }

  if (!body?.number) {
    return response.status(400).json({
      error: "person phone number missing",
    });
  }

  if (names.includes(body.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const generateId = () => {
    const ids = persons.map((p) => p.id);

    const generateNumber = () =>
      Math.floor(Math.random() * (99999 - 1 + 1) + 1);
    const id = generateNumber();

    // try to avoid the presence of 2 identical ids
    if (!ids.includes(id)) {
      return id;
    } else {
      const newId = generateNumber();

      return newId;
    }
  };

  const newPerson = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = [...persons, newPerson];

  response.json(newPerson);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
