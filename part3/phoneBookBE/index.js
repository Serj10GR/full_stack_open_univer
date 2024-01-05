require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const Person = require("./models/person");
const errorHandler = require("./middleware")

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
app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
});

// 3.4
app.delete("/api/persons/:id", (request, response) => {  
   Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
});

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true, runValidators: true, context: 'query' })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

// 3.5
app.post("/api/persons/", (request, response, next) => {
  const body = request.body;

  const name = body?.name;
  const number = body?.number;


  const newPerson = new Person({
    name,
    number,
  });

  newPerson.save().then((savedPerson) => {
    response.json(savedPerson);
  }).catch(err => next(err))
});


app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
