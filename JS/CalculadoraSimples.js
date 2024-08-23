import {add, sub, multiply, division} from "./CalculadoraSimples2modulo.js"

const numero1 = document.querySelector('.numero1')
const numero2 = document.querySelector('.numero2')
const resultado = document.querySelector('.resultado')


const addFunction = () => {
    if(numero1.value != '' && numero2.value != ''){
        resultado.innerHTML = add(+numero1.value, +numero2.value)
    }
}

const subFunction = () => {
    if(numero1.value != '' && numero2.value != ''){
        resultado.innerHTML = sub(+numero1.value, +numero2.value)
    }
}

const mulFunction = () => {
    if(numero1.value != '' && numero2.value != ''){
        resultado.innerHTML = multiply(+numero1.value, +numero2.value)
    }
}

const divFunction = () => {
    if(numero1.value != '' && numero2.value != ''){
        resultado.innerHTML = division(+numero1.value, +numero2.value)
    }
}

const btnAdd = document.querySelector('#add')
btnAdd.addEventListener('click', addFunction)

const btnSub = document.querySelector('#sub')
btnSub.addEventListener('click', subFunction)

const btnMul = document.querySelector('#mul')
btnMul.addEventListener('click', mulFunction)

const btnDiv = document.querySelector('#div')
btnDiv.addEventListener('click', divFunction)
