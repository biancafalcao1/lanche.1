const prompt = require("prompt-sync")();

const tabela = {
  1: { nome: "CACHORRO QUENTE", preco: 4.2 },
  2: { nome: "X-SALADA", preco: 4.5 },
  3: { nome: "X-BACON", preco: 5.0 },
  4: { nome: "TORRADA SIMPLES", preco: 2.0 },
  5: { nome: "REFRIGERANTE", preco: 1.5 },
};

function calcularTotal(codigo, quantidade) {
  const produto = tabela[codigo];
  if (produto) {
    return produto.preco * quantidade;
  } else {
    return 0;
  }
}

function formatarValor(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

for (let i = 0; i < 5; i++) {
  const entrada = prompt("Digite o código do produto e a quantidade (separados por espaço): ");
  const [codigo, quantidade] = entrada.split(" ").map(Number);

  const total = calcularTotal(codigo, quantidade);

  console.log("Total: ", formatarValor(total));
}
