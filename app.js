//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigo = [];

//Adiciona o nome que foi inserido no input de id "amigo".
//Não permite a inserção de nomes iguais.
function adicionarAmigo() {
  let nomeInformado = document.getElementById("amigo").value;
  atualizarListaDeAmigos(nomeInformado);
}

//Verifica se o nome informado já existe na lista e inseri caso não exista.
function atualizarListaDeAmigos(nomeInformado) {
  if (nomeAmigo.includes(nomeInformado) || nomeInformado == "") {
    alert("Nome já inserido ou valor inválido.");
  } else {
    nomeAmigo.push(nomeInformado);
    atualizarExibicaoLista()
    console.log(nomeAmigo);
    
  }
}

function atualizarExibicaoLista(){
  let lista = document.getElementById("listaAmigos");  lista.innerHTML = "";

  nomeAmigo.forEach((nome) => {
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

//Seleciona de forma randomica o nome referente ao índice que o mesmo ocupa de acordo com o tamanho do array.
function sortearAmigo() {
  let sorteio = nomeAmigo[parseInt(Math.random() * nomeAmigo.length)];
  exibirTextoNaTela("h2", "Você saiu com:");
  exibirTextoNaTela("p", sorteio);
}