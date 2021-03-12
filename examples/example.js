// eslint-disable-next-line
const objectLineFinder = require("../build/index");

const example = 
{
  "firstName": "user",
  "lastName": "a",
  "age": 50
}

console.log(objectLineFinder(example, "age")); // [4]