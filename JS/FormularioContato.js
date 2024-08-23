var nome = document.querySelector('#nome')
var sobrenome = document.querySelector('#sobrenome')
var email = document.querySelector('.caixaEmail')
var ajudante = document.querySelector('#aju');
var suporte = document.querySelector('#sup');
var msg = document.querySelector('.mensagem')
var check = document.querySelector('.check')
var opcaoSelecionada = '';


function validarEmail(email) { // Formata o email
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function enviar() {
   
    if (nome.value.trim() === "" || sobrenome.value.trim() === "" || !validarEmail(email.value) || msg.value.trim() === "") { // Verifica se o nome, sobrenome, email, msg estao certo
        alert("Suas informações estão erradas"); 

    } else if (ajudante.checked){ // Verifica se a opçao e ajudante
        opcaoSelecionada = 'Ajudante';

        if(check.checked){ // Verifica se a checkbox esta marcada
            alert(nome.value + " " + sobrenome.value + " " + email.value + " " + msg.value + " " + opcaoSelecionada) // manda um alert com as coisas que o formulario recebeu
        }else{
            alert("Confirme para enviar");
        }

    } else if (suporte.checked) { // Verifica se a opçao e suporte
        opcaoSelecionada = 'Suporte';

        if(check.checked){ // Verifica se a checkbox esta marcada
            alert(nome.value + " " + sobrenome.value + " " + email.value + " " + msg.value + " " + opcaoSelecionada) // manda um alert com as coisas que o formulario recebeu
        }else{
            alert("Confirme para enviar");
        }

    } else {
        alert("Escolha uma opção");
    }

    // Limpa o formulario pos o envio
    nome.value = '';   
    sobrenome.value = '';
    email.value = '';
    ajudante.checked = false;
    suporte.checked = false;
    msg.value = '';
    check.checked = false;

}