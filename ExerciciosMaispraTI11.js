let soma = 0;
for (let i = 1; i <= 5; i++) {
  let num = parseFloat(prompt(`Digite o ${i}º número:`));
  soma += num;
}
alert("Soma: " + soma);
