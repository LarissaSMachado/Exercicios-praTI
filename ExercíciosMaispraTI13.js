let total = 0;
let count = 0;
let num;
do {
  num = parseFloat(prompt("Digite um número (0 para parar):"));
  if (num !== 0) {
    total += num;
    count++;
  }
} while (num !== 0);

if (count > 0) {
  alert("Média: " + (total / count).toFixed(2));
} else {
  alert("Nenhum número válido inserido.");
}
