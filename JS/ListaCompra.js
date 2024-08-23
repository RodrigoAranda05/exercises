const btn = document.querySelector('.btn')
btn.addEventListener("click", novoProduto)

var inputProduto = document.querySelector(".inputProduto")
var inputQuantidade = document.querySelector(".inputQuantidade")

function novoProduto(){
    if(inputProduto.value != '' && inputQuantidade.value != ''){
    const newProduto = document.createElement('div')
    newProduto.classList.add('umProduto')

    newProduto.innerHTML = 
    `
    <h1><p>${inputProduto.value}</p> - <span class="numero">${inputQuantidade.value}</span> <i class="fa-solid fa-up-long" id="aumentar"></i><i class="fa-solid fa-down-long" id="diminuir"></i><i class="fa-solid fa-trash" id="apagar"></i></h1>
    `

    const produtos = document.querySelector('.produtos')
    produtos.append(newProduto)

    const aumentar = document.querySelectorAll('.fa-solid.fa-up-long')
    aumentar.forEach(element => {
        element.addEventListener("click", aumentarProduto)
    })

    const diminuir = document.querySelectorAll('.fa-solid.fa-down-long')
    diminuir.forEach(element => {
        element.addEventListener("click", diminuirProduto)
    })

    const apagar = document.querySelectorAll('.fa-solid.fa-trash')
    apagar.forEach(element => { // revisar dps
        element.addEventListener("click", excluirProduto)
    })

    inputProduto.value = ''
    inputQuantidade.value = ''

    let totalItens = Number(document.querySelector('#totalItens').innerText)
    totalItens += 1
    document.querySelector("#totalItens").innerText = totalItens

    }
    else{
        alert("ESQUECEU DE PREENCHER AS INFORMAÇÕES")
    }
}

function excluirProduto(event) {
    event.target.parentElement.remove()

    let totalItens = Number(document.querySelector('#totalItens').innerText)
    totalItens -= 1
    document.querySelector("#totalItens").innerText = totalItens
}

function aumentarProduto(event){
    let numeroQuantidadeA = Number(event.target.parentElement.querySelector(".numero").innerText)
    numeroQuantidadeA++
    let numeroDivA = event.target.parentElement.querySelector(".numero")
    numeroDivA.innerText = `${numeroQuantidadeA}`
}

function diminuirProduto(event){
    let numeroQuantidadeD  = Number(event.target.parentElement.querySelector(".numero").innerText)
    numeroQuantidadeD--
    let  numeroDivD = event.target.parentElement.querySelector(".numero")
    numeroDivD.innerText = numeroQuantidadeD

    if(numeroQuantidadeD === 0){
        event.target.parentElement.remove()
        let totalItens = Number(document.querySelector('#totalItens').innerText)
        totalItens -= 1
        document.querySelector("#totalItens").innerText = totalItens
    }else{

    }
}
