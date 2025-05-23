let a1 = 0, a2 = 1;
let fib = "0 1";

for (let i = 2; i < 10; i++) {
  let prox = a1 + a2;
  fib += " " + prox;
  a1 = a2;
  a2 = prox;
}
alert("Fibonacci: " + fib);
