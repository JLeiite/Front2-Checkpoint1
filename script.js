// Recebendo valores do formulario
let inputDestino = document.querySelector("#destino");
let inputDescricao = document.querySelector("#descricao");
let inputImagem = document.querySelector("#imagem");
let inputNota = document.querySelector("#nota");
let inputColor = document.querySelector("#color");

// BOTÃO > Definindo validação do botão
const formControl = document.querySelector("form");
const formButton = document.querySelector(".form-button");

// FORM > Validação
function validarInput() {

    // Validando o Destino
    if(inputDestino.value.length < 4){
        inputDestino.classList.add("is-invalid");
    }
    else {inputDestino.classList.remove("is-invalid")};
        
    // Validando a Descrição
    if(inputDescricao.value.length < 4){
          inputDescricao.classList.add("is-invalid");
    }
    else{inputDescricao.classList.remove("is-invalid")};
}

// BOTÃO > Definindo botão desabilitado como padrão
formButton.disabled = true;
formControl.addEventListener("keyup", validarBotao);
function validarBotao() {
    if (inputDestino.value === "" || inputDescricao.value === "" || inputImagem.value === "" || inputNota.value === "") {
        formButton.disabled = true; // Desabilitar botão enquanto input estiver vazio
    }
    else if (inputDestino.value.length < 4 || inputDescricao.value.length < 4){
        
        formButton.disabled = true; // Desabilita enquanto não atender a condição
        
        // Validando os inputs
        formControl.addEventListener("keyup", validarInput);
    }
    else{
        formButton.disabled = false; // Habilitar botão enquanto input tiver preenchido
    }
}
// BOTÃO > Limpando dados do formulário
function clearData() {
    inputDestino.value = ''; 
    inputDescricao.value = '';
    inputImagem.value = '';
    inputNota.value = '';
    formButton.disabled = true;
}

// CARD > Adicionar card
let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Criando elementos
    let addCard = document.createElement("a");

    // Define o que vai ser adicionado na página
    addCard.innerHTML = `
        <div class="card bg-light border-secondary p-2 mt-3 ml-3" style="width: 20rem;">
        <div id="close" onclick="eliminaCard()" class="bg-dark" style="position: absolute; padding: 2px 8px; z-index: 2; opacity: 0.7; right: 8px; cursor: pointer"><i class="bi bi-x-circle-fill text-white" style="font-size: 14pt"></i></div>
        <img class="card-img-top" src="${inputImagem.value}" alt="Imagem cidade">
        <div class="card-body">
        <h5 class="card-title"> ${destino.value} <span class="badge text-light small" style="background-color:${color.value}"><i class="bi bi-star"></i> ${nota.value}</span> </h5>
        <p class="card-text">${descricao.value}</p>
        </div>
        </div>`;
        
    // Resetanto inputs
    clearData();
        
    // Definindo onde vai ser adicionado
    const card = document.querySelector(".addCard");

    // Adicionando ao código
    // Adiciona o card no final > card.appendChild(addCard);  
    // Adiciona o card no início
    card.prepend(addCard);  
})

// Eliminando o card
function eliminaCard() {
    let esteCard = document.querySelector(".card");
    esteCard.parentNode.removeChild(esteCard);
  }
