const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://openuni:${password}@phonebook.dbobszb.mongodb.net/phoneBookApp?retryWrites=true&w=majority`;

const personName = process.argv[3];
const personPhone = process.argv[4];

mongoose.set("strictQuery", false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
});

const Person = mongoose.model("Person", personSchema);

// if args not provided then show saved persons
if (!personName && !personPhone) {
  Person.find({}).then((result) => {
    result.forEach((note) => {
      console.log(note);
    });
    mongoose.connection.close();
  });
}

//if args are provided save new Person to db

if (personName && personPhone) {
  const person = new Person({
    name: personName,
    phoneNumber: personPhone,
  });

  person.save().then(() => {
    console.log("person saved!");
    mongoose.connection.close();
  });
}
