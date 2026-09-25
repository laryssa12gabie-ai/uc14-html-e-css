let tarefas = []

let toltalTarefas = 0;
let toltalconcluidas = 0;


function adicionarTarefa() {

    let none = document.getElementById("tarefa").ValueMax.trim();

    let materia = document.getElementById("materia").value.trim();

    let prioridade = document.getElementById("prioridade").value.trim();

    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome  "" || materia === "" || prioridade === "") {

        mensagem.textConetnt = "preencha todos os Campos!";

        mensagem.style.color = "red";
    }

    return:
}
let tarefas =[];

let totalTarefas = 0;
let totalConcluidas = 0;



function adicionarTarefas(){
    let nome = document.getElementById("tarefa").value.trim();

let materia = document.getElementById("materia").value.trim();

let prioridade = document.getElementById("prioridade").value;

let mensagem = document.getElementById("mensagem");

if(nome === "" || materia === "" || prioridade === ""){
    mensagem.textContent = "preencha os campos!";
    mensagem.style.color = "red";
}
}
let duplicada = tarefas.some(function(tarefa){
    return tarefa.nome.toLowerCase() === nome.toLowerCase();
});

if (duplicada) {
    mensagem.textContent = "essa tarefa já foi cadastrada!";
    mensagem.style.color = "red"
    return;
}
 function adicionarTarefa(){
    let novatarefa = {
        nome: nome, 
        materia: materia,
        prioridade: prioridade, 
        concluida: false
    };

    tarefas.push(novatarefa);
    totalTarefas++;
    mensagem.textContent = "tareda cadastrada com sucesso!";
    let tarefas =[];

let totalTarefas = 0;
let totalConcluidas = 0;



function adicionarTarefas(){
    let nome = document.getElementById("tarefa").value.trim();

let materia = document.getElementById("materia").value.trim();

let prioridade = document.getElementById("prioridade").value;

let mensagem = document.getElementById("mensagem");

if(nome === "" || materia === "" || prioridade === ""){
    mensagem.textContent = "preencha os campos!";
    mensagem.style.color = "red";
}
}
let duplicada = tarefas.some(function(tarefa){
    return tarefa.nome.toLowerCase() === nome.toLowerCase();
});

if (duplicada) {
    mensagem.textContent = "essa tarefa já foi cadastrada!";
    mensagem.style.color = "red"
    return;
}
 function adicionarTarefa(){
    let novatarefa = {
        nome: nome, 
        materia: materia,
        prioridade: prioridade, 
        concluida: false
    };

    tarefas.push(novatarefa);
    totalTarefas++;
    mensagem.textContent = "tarefa cadastrada com sucesso!";