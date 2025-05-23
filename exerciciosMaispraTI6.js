let l1 = parseFloat(prompt("Lado A:"));
let l2 = parseFloat(prompt("Lado B:"));
let l3 = parseFloat(prompt("Lado C:"));

if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2) {
  if (l1 === l2 && l2 === l3) alert("Equilátero");
  else if (l1 === l2 || l1 === l3 || l2 === l3) alert("Isósceles");
  else alert("Escaleno");
} else {
  alert("Não é um triângulo");
}
