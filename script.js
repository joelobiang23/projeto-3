// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const parafo0 = document.getElementById("mensagem0");
const parafo1 = document.getElementById("mensagem1");
const parafo2 = document.getElementById("mensagem2");

const  boton = document.getElementById("novo-btn");



// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

boton.addEventListener("click", function () { 
    parafo0.textContent = "Nao a nada novo embaixo do sol, todo o que eh ja foi!";
    
});
boton.addEventListener("click", function () { 
  parafo1.textContent = "Quem pensa que o dinheiro faz tudo, acaba fazendo tudo por dinheiro";
  
});
boton.addEventListener("click", function () { 
  parafo2.textContent = "O mundo é um palco onde todos participam";
  
});