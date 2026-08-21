//1. pegar a temperatura
const temperatura = Number(prompt('Digite a temperatura:'));

//2. seleciona elementos do HTML
const temperaturaEl = document.getElementById('temperatura');
const mensagemEl    = document.getElementById('mensagem');

//3. variaveis que guardam resultado
let classificacao = '';
let msg = '';

//4. decidir a classificacao com if/else
if (temperatura < 15) {
    classificacao = 'frio';
    msg = 'Está frio!';

} else if (temperatura >= 15 && temperatura <= 25) {
    classificacao = 'agradável';
    msg = 'O clima está agradável!';

} else if (temperatura > 35) {
    classificacao = 'muito quente';
    msg = 'Está muito quente!';

} else {
    classificacao = 'quente';
    msg = 'Está quente!';
}

//5. colocar conteudo nos elementos
temperaturaEl.textContent = `Temperatura informada: ${temperatura}°C`;
mensagemEl.textContent = msg;

//6. log para o desenvolvedor
console.log(`Temperatura: ${temperatura}°C | Classificação: ${classificacao}`);