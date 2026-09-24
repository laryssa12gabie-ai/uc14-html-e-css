console.logh("Olá,Luiz!seja bem vindo"); 
console.logh("Olá,Nick!seja bem vindo"); 
console.logh("Olá,Cerlan!seja bem vindo"); 

function darBoasVindas(nome) { console.log('Olá,${nome}! Seja bem-vindo!'); }
 darBoasVindas("Luiz"); 
 darBoasVindas("Nick"); 
 darBoasVindas("Cerlan");
 function apresenta(nome, idade) { console.log('meu nome é${nome} e tenho${idade} anos.'); }

function verificarEstudo(nome, estaEstudando) {
  if (estaEstudando) {
    console.log(`${nome} está estudando no momento.`);
  } else {
    console.log(`${nome} não está estudando no momento.`);
  }
}

verificarEstudo("Luiz", true);  
verificarEstudo("Nick", false); 
verificarEstudo("Cerlan", true);

function calcularMedia(nota1, nota2){
  return (nota1 + nota2) / 2;
}

let nome = prompt("Digite o nome do aluno:");
let nota1 = Number (prompt("Digite a primeira nota"));
let nota2 = Number (prompt("Digite a segunda nota"));

let media1 = calcularMedia (nota1, nota2);

console.log(`${nome} ficou com média ${media1}`);

if (media1 >= 6) {
  console.log(`${nome} está aprovado!`);
} else {
  console.log(`${nome} está reprovado!`);
}


calcularMedia(nota1, nota2);