import { countries } from "./countries.js";


const query = process.argv[2]
if(!query){
  console.log("faltou o argumento de busca")
} else{
  const resultado = countries.filter(contry => contry.name.toLowerCase() [0]===query.toLowerCase())
  console.log(resultado)
}