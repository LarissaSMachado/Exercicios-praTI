let opcao = parseInt(prompt("Escolha uma opção:\n1 - Saudação\n2 - Soma\n3 - Sair"));

switch (opcao) {
  case 1:
    alert("Olá, seja bem-vindo!");
    break;
  case 2:
    let a = parseInt(prompt("Digite o primeiro número:"));
    let b = parseInt(prompt("Digite o segundo número:"));
    alert("Soma: " + (a + b));
    break;
  case 3:
    alert("Saindo...");
    break;
  default:
    alert("Opção inválida");
}
