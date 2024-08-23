const btn = document.querySelector(".btn")
btn.addEventListener("click", votar)

var candidato1 = 0
var candidato2 = 0
var candidato3 = 0

let verificarNumero = []
votaAtivo = true

function votar(){
    if(!votaAtivo){
        alert("Votaçao terminou")
        return
    }

    const inputNumero = document.querySelector(".inputNumero").value

    if(verificarNumero.includes(inputNumero)){
        alert("Você ja votou")
        return
    }else{
        verificarNumero.push(inputNumero)
    }

    if(inputNumero.length > 2){
        const inputCandidato1 = document.querySelector("#candidato1")
        const inputCandidato2 = document.querySelector("#candidato2")
        const inputCandidato3 = document.querySelector("#candidato3")

        if(inputCandidato1.checked){
            console.log('candidato 1')
            candidato1++
            console.log(candidato1)
        }else if(inputCandidato2.checked){
            console.log('candidato 2')
            candidato2++
            console.log(candidato2)
        }else{
            console.log('candidato 3')
            candidato3++
            console.log(candidato3)
        }

        document.querySelector(".inputNumero").value = ""
        inputCandidato1.checked = false
        inputCandidato2.checked = false
        inputCandidato3.checked = false


    }else{
        alert('Suas informações não estao corretas')
    }
}

const btnEncerrar = document.querySelector(".btnEncerrar")
btnEncerrar.addEventListener("click", encerrar)

function encerrar(){
    if(candidato1 === 0 && candidato2 === 0 && candidato3 === 0){
        alert("Sem votos suficientes")
    }else{
        votaAtivo = false
        document.querySelector(".resultado").style.display = 'block'
        const resCandidato1 = document.querySelector("#resCandidato1")
        const resCandidato2 = document.querySelector("#resCandidato2")
        const resCandidato3 = document.querySelector("#resCandidato3")
    
        resCandidato1.innerText = candidato1
        resCandidato2.innerText = candidato2
        resCandidato3.innerText = candidato3
    }
}

