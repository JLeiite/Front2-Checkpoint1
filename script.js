// Recebendo valores do formulario
let inputDestino = document.querySelector("#destino");
let inputDescricao = document.querySelector("#descricao");
let inputImagem = document.querySelector("#imagem");
let inputNota = document.querySelector("#nota");
let inputColor = document.querySelector("#color");

// BOTÃO > Definindo validação do botão
const formControl = document.querySelector("form");
const formButton = document.querySelector(".form-button");

// BOTÃO > Definindo botão desabilitado como padrão
formButton.disabled = true;
formControl.addEventListener("keyup", validarBotao);
function validarBotao() {
    if (inputDestino.value === "" || inputDescricao.value === "" || inputImagem.value === "" || inputNota.value === "") {
        formButton.disabled = true; // Desabilitar botão enquanto input estiver vazio
    }else if(inputDescricao.value.length < 4){
        formButton.disabled = true; // Desabilitar botão enquanto o valor da descrição for menor que 4 caracteres
        alert("Insira uma descrição maior");
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
        <img class="card-img-top" src="${inputImagem.value}" alt="Card image cap">
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
    card.appendChild(addCard);   
})