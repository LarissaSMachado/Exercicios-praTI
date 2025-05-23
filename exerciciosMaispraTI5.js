let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));
let imc = peso / (altura * altura);

alert("IMC: " + imc.toFixed(2));

if (imc < 18.5) alert("Abaixo do peso");
else if (imc < 24.9) alert("Peso normal");
else if (imc < 29.9) alert("Sobrepeso");
else alert("Obesidade");
