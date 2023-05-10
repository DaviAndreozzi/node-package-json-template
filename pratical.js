import { countries } from "./countries.js";

const query = process.argv[2]
if(!query){
  console.log("faltou o argumento de busca")
} else{
  const result =countries.filter(country => country.name.includes(query))
  console.log(result)
}