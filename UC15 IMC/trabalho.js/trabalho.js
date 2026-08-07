// Variáveis
let nomeCliente = "Maria";
let valorCompra = 650.00;
let clienteVip = false;

// Variáveis de cálculo
let percentualDesconto = 0;
let valorDesconto = 0;
let valorFinal = 0;

// Regras de desconto
if (clienteVip) {
    percentualDesconto = 20;
} else if (valorCompra >= 500) {
    percentualDesconto = 15;
} else if (valorCompra >= 200) {
    percentualDesconto = 10;
} else {
    percentualDesconto = 0;
}

// Cálculos
valorDesconto = valorCompra * (percentualDesconto / 100);
valorFinal = valorCompra - valorDesconto;

// Exibir resultado
let resultado = document.getElementById("resultado");

resultado.innerHTML = `
    <p><strong>Nome:</strong> ${nomeCliente}</p>
    <p><strong>Valor da compra:</strong> R$ ${valorCompra.toFixed(2)}</p>
    <p><strong>Desconto:</strong> ${percentualDesconto}%</p>
    <p><strong>Valor do desconto:</strong> R$ ${valorDesconto.toFixed(2)}</p>
    <p><strong>Valor final:</strong> R$ ${valorFinal.toFixed(2)}</p>
`;

// Desafio opcional
if (valorFinal > 1000) {
    resultado.innerHTML += "<p>Parabéns! Você ganhou frete grátis.</p>";
} else {
    resultado.innerHTML += "<p>Frete será cobrado normalmente.</p>";
}