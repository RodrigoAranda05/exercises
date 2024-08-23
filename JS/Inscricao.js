/* A função caixaEmail adiciona um evento focus ao input com a classe caixaEmail.
Quando o input recebe foco, a função handleFocus é chamada.
handleFocus define o valor do input como uma string vazia e remove o próprio evento focus, garantindo que isso ocorra apenas uma vez.*/

const input = document.querySelector('.caixaEmail')
const erro  = document.querySelector('.erro')
const popup = document.querySelector('.pop-up')
const seuEmail = document.querySelector('.seuEmail')
const card = document.querySelector('.card')

function caixaEmail() {

    function handleFocus() {
        input.value = ''
        input.removeEventListener('focus', handleFocus)
    }

    input.addEventListener('focus', handleFocus);

}

    document.addEventListener('DOMContentLoaded', caixaEmail) // Para garantir que a função é executada após o carregamento da página:

function validarEmail(input){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(input)
}

function inscrever(){
    if(!validarEmail(input.value) || input.value === 'email@company.com'){
        console.log('suas informaçoes estao erradas')
        erro.style.display = 'flex'
        input.style.background = '#FAC8C6'
        input.style.borderColor = '#FA3D24'
        input.style.color = '#FA3D24'

    }else{
        card.style.display = 'none'
        popup.style.display = 'flex'
        seuEmail.innerHTML = `${input.value}`
        erro.style.display = 'none'
        input.style.background = 'white'
        input.style.borderColor = 'black'
        input.style.color = 'black'
    }

}

function sair(){
    card.style.display = 'block'
    popup.style.display = 'none'
    input.value = ''
}


