
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const temaBtn = document.getElementById("tema-btn");
const saudacao = document.getElementById("saudacao");
const ano = document.getElementById("ano");
const formContato = document.getElementById("form-contato");
const respostaForm = document.getElementById("resposta-form");

// Menu para celular
if (menuBtn && menu) {
menuBtn.addEventListener("click", function () {
menu.classList.toggle("ativo");
});

const links = menu.querySelectorAll("a");

links.forEach(function (link) {
link.addEventListener("click", function () {
    menu.classList.remove("ativo");
});
});
}

// Saudacao de acordo com o horario
if (saudacao) {
const hora = new Date().getHours();

if (hora >= 5 && hora < 12) {
saudacao.textContent = "Bom dia! Seja bem-vindo(a) ao meu portfólio.";
} else if (hora >= 12 && hora < 18) {
saudacao.textContent = "Boa tarde! Seja bem-vindo(a) ao meu portfólio.";
} else {
saudacao.textContent = "Boa noite! Seja bem-vindo(a) ao meu portfólio.";
}
}

// Alternar tema
if (temaBtn) {
temaBtn.addEventListener("click", function () {
document.body.classList.toggle("tema-escuro");

if (document.body.classList.contains("tema-escuro")) {
    temaBtn.textContent = "Tema claro";
} else {
    temaBtn.textContent = "Tema escuro";
}
});
}

// Atualizar o ano do rodape
if (ano) {
ano.textContent = new Date().getFullYear();
}

// Validar formulario de contato
if (formContato) {
formContato.addEventListener("submit", function (event) {
event.preventDefault();

const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
const mensagem = document.getElementById("mensagem").value.trim();
const consentimento = document.getElementById("consentimento");

if (nome === "" || email === "" || mensagem === "") {
    respostaForm.textContent = "Preencha todos os campos.";
    return;
}

if (consentimento && !consentimento.checked) {
    respostaForm.textContent = "Marque a caixa de consentimento.";
    return;
}

respostaForm.textContent = "Formulario preenchido com sucesso!";
formContato.reset();
});
}
