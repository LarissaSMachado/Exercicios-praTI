let qtd = parseInt(prompt("Quantas maçãs?"));
let preco = qtd < 12 ? 0.30 : 0.25;
alert("Total: R$ " + (qtd * preco).toFixed(2));
