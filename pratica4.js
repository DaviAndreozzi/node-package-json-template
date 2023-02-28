const mais = 7;

const nome = process.argv[2];

const idade = process.argv[3];

if (!nome || !idade) {
  console.log("faltaram argumentos");
} else {
  const anos = +idade + mais;
  console.log("ola,", nome, "! Você tem", idade, "anos.");
  console.log("Em sete anos você terá", anos);
}
