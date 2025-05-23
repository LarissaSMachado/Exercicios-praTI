let fat = parseInt(prompt("Digite um número:"));
let resultado = 1;

for (let i = 2; i <= fat; i++) {
  resultado *= i;
}
alert("Fatorial de " + fat + " é " + resultado);
