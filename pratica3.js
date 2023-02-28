import { countries } from "./countries.js";

const name = process.argv[2];
const code = process.argv[3];

if (!name || !code) {
  console.log("faltaram argumentos");
} else {
  const newContry = { name, code };
  countries.push(newContry);
  console.log(countries[countries.length - 1]);
}
