const btn = document.querySelector(".btn")
btn.addEventListener("click", votar)

const btnEncerrar = document.querySelector(".btnEncerrar")
btnEncerrar.addEventListener("click", encerrar)

const btnOpcao = document.querySelector(".btnOpcao")
btnOpcao.addEventListener("click", criarOpcao)

let verificarCodigo = []
let verificarOpcaoVoto = []
let quantidadeOpcoes = []
let contagemVotos = []
votaAtivo = true

function votar(){
    // Verifica se a votação terminou
    if(!votaAtivo){
        alert("Votaçao terminou")
        return
    }

    // Verifica se o codigo foi usado
    const inputNumero = document.querySelector(".inputNumero").value
    if (verificarCodigo.includes(inputNumero)) {
        alert("Você já votou");
        return;
    } else {
        verificarCodigo.push(inputNumero);
    }

    // Verifica qual opcao foi votada
    if (inputNumero.length <= 2) {
        alert('Suas informações não estão corretas');
        return;
    }

    const opcoes = document.querySelectorAll(".inputRadio");
    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            contagemVotos[i] = (contagemVotos[i] || 0) + 1;

            document.querySelector(".inputNumero").value = "";
            opcoes[i].checked = false;
            return;
        }
    }

}

function encerrar(){
    const opcoes = document.querySelectorAll(".inputRadio");
    for (let i = 0; i < opcoes.length; i++){
        if(true){
            if(contagemVotos[i] === undefined){
                contagemVotos[i] = 0
            }

            let resultadoVotos = document.createElement("div")

            resultadoVotos.innerHTML = 
            `
            <h3>${opcoes[i].id}:</h3><p>${contagemVotos[i]}</p>
            `
            const resultado = document.querySelector(".resultado")
            resultado.append(resultadoVotos)

            resultado.style.display = 'block'
        }else{

        }
    }
    votaAtivo = false
    document.querySelector(".inputOpcao").remove()
    document.querySelector(".btnOpcao").remove()
    btnEncerrar.remove()
}

function criarOpcao(){
    const inputOpcao = document.querySelector(".inputOpcao").value
    const opcoes = document.querySelector(".opcoes")

    if(verificarOpcaoVoto.includes(inputOpcao)){
        alert("Essa opção ja existe");
        return;
    }

    if(inputOpcao == ''){
        alert("ERRO AO CRIAR OPÇÃO - Opção de voto vazia")
    }else{

    document.querySelector(".vazio").style.display = 'none'
    let novaOpcao = document.createElement("div")

    novaOpcao.innerHTML = 
    `
    <input type="radio" name="opcaoVoto" class="inputRadio" id="${inputOpcao}">
    <label for="${inputOpcao}">${inputOpcao} </label>
    `

    opcoes.append(novaOpcao)
    quantidadeOpcoes.push(inputOpcao)

    document.querySelector(".inputOpcao").value = ''
    verificarOpcaoVoto.push(inputOpcao)

    }
}

