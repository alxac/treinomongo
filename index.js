const { Person } = require("./src/person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

// // // require("./modules/path");
// // // require("./modules/fs");
// // // require("./modules/http");

require("./modules/express");

const person = new Person("Felipe");
console.log(person.sayMyName());