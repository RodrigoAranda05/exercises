const btn = document.querySelector(".btn")
btn.addEventListener("click", calcular)

function calcular(){
    const inputValorConta = Number(document.querySelector(".inputValorConta").value)
    const inputGorgeta = Number(document.querySelector(".inputGorgeta").value)
    const resultado = document.querySelector(".resultado")
    const valorGorgetaSpan = document.querySelector("#valorGorgeta")
    const valorTotalSpan = document.querySelector("#valorTotal")
    let valorTotal = 0
    let valorGorgeta = 0

    if(inputValorConta === 0 || inputGorgeta === 0 || inputValorConta < inputGorgeta){
        alert("ERRO - Informações erradas")
    }
    else{
    resultado.style.display = 'block'

    valorGorgeta = (inputGorgeta / 100) * inputValorConta
    valorTotal = inputValorConta + valorGorgeta

    valorGorgeta = valorGorgeta.toFixed(2)
    valorTotal = valorTotal.toFixed(2)

    valorGorgetaSpan.innerText = valorGorgeta
    valorTotalSpan.innerText = valorTotal

    }
}