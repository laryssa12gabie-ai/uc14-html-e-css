let nome = prompt('qual é o seu nome')
let pesoStr = prompt(`ola ${nome}! qual é o seu peso em kg?/n(nao use vírgula ou ponto - ex: 75,5 ou 75.5)`);
let altStr = prompt('qual é a sua altura em metros?\n(ex: 1,75 ou 1.75)');

let peso = Number(pesoStr.replace(',','.'));
let alt = Nunber(altStr.replace(',','.'));

console.log('nome', nome);
console.log('peso', peso, typeof peso );
comsole.log('altura', alt, typeof alt);

let imc = peso / (alt * alt); 
let imcFormatado = imc.toFixed(1);

if (IMC < 18.5) {
    console.log("Abaixo do peso");
} else if (IMC < 25) {
    console.log("Peso normal");
} else if (IMC < 30) {
    console.log("Sobrepeso");
} else if (IMC < 35) {
    console.log("Obesidade grau 1");
} else if (IMC < 40) {
    console.log("Obesidade grau 2");
} else {
    console.log("Obesidade grau 3");
}