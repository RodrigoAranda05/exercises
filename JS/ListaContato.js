const listaContatos = document.querySelector('#listaContatos')

const createContact = () => {
    const nome = document.querySelector('#f_nome').value
    const telefone = document.querySelector('#f_telefone').value
    const email = document.querySelector('#f_email').value

    if(nome != '' && telefone != '' && email != ''){
    const div = document.createElement('div')
    const pNome = document.createElement('p')
    const pTelefone = document.createElement('p')
    const pEmail = document.createElement('p')
    const delet = document.createElement('i')

    pNome.innerHTML = nome
    pTelefone.innerHTML = telefone
    pEmail.innerHTML = email

    delet.classList.add('fa-solid', 'fa-trash')
    div.classList.add('contato')

    listaContatos.appendChild(div)
    div.appendChild(pNome)
    div.appendChild(pTelefone)
    div.appendChild(pEmail)
    div.appendChild(delet)

    delet.addEventListener('click', deletContact)

    }else{
        alert("ERRO")
    }
}

const deletContact = (event) => {
    event.target.parentElement.remove()
}

const btn_gravar = document.querySelector('#btn_gravar')
btn_gravar.addEventListener('click', createContact)

