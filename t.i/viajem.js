```javascript
function calcularCustoViagem(passagem, hospedagem, alimentacao, passeios, orcamento = 2000.00) {
    // Aqui eu junto todos os valores para saber quanto a viagem vai custar
    const custoTotal = passagem + hospedagem + alimentacao + passeios;
    
    console.log("--- Relação de Gastos ---");
    console.log(`Passagem: R$ ${passagem.toFixed(2)}`);
    console.log(`Hospedagem: R$ ${hospedagem.toFixed(2)}`);
    console.log(`Alimentação: R$ ${alimentacao.toFixed(2)}`);
    console.log(`Passeios: R$ ${passeios.toFixed(2)}`);
    console.log("------------------------");
    console.log(`Custo Total: R$ ${custoTotal.toFixed(2)}`);
    console.log(`Orçamento Limite: R$ ${orcamento.toFixed(2)}\n`);
    
    // Agora eu vejo se o valor total ficou dentro do orçamento
    if (custoTotal <= orcamento) {
        const sobra = orcamento - custoTotal;
        console.log(`Resultado: A viagem ESTÁ dentro do orçamento! (Sobra de R$ ${sobra.toFixed(2)})`);
    } else {
        const excesso = custoTotal - orcamento;
        console.log(`Resultado: A viagem NÃO está dentro do orçamento! (Passou R$ ${excesso.toFixed(2)})`);
    }
}
```
