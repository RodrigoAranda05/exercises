let quantidadeTarefa = 0

const icon = document.querySelector(".icon")
icon.addEventListener("click", Noturno)

const excluir = document.querySelector('.Excluir')
excluir.addEventListener('click', excluirConcluidas)

const inputNovaTarefa = document.querySelector(".inputNovaTarefa")
inputNovaTarefa.addEventListener("keydown", novaTarefa)

const filtro = document.querySelectorAll(".filtro")
filtro.forEach(filtro => {
    filtro.addEventListener("click", filtrar)
})

function Noturno(){
    if(document.body.classList == "dark-mode"){
        icon.src = "file:///C:/Users/rodri/Desktop/Exercicios/IMG/LISTA/icon-sun.svg"
        document.body.classList.remove("dark-mode")
        document.body.classList.add("white-mode")
    }else{
        icon.src = "file:///C:/Users/rodri/Desktop/Exercicios/IMG/LISTA/icon-moon.svg"
        document.body.classList.remove("white-mode")
        document.body.classList.add("dark-mode")
    }
    
}

function novaTarefa(event) {
    const inputValue = document.querySelector('.inputNovaTarefa').value

    if (event.key === 'Enter' && inputValue != '') {
        event.preventDefault() // Impede o comportamento padrão (como enviar um formulário)
        const todasTarefas = document.querySelector(".todasTarefas")
        const estatisticas = document.querySelector('.estatisticas');

        let newTarefa = document.createElement('div')
        newTarefa.classList.add('tarefa')
        newTarefa.innerHTML = 
        `
            <input type="checkbox" class="checkTarefa"> <p>${inputValue}</p>
        `

        todasTarefas.insertBefore(newTarefa, estatisticas);
        inputNovaTarefa.value = ''

        const checkTarefa = document.querySelectorAll('.checkTarefa');

         quantidadeTarefa = checkTarefa.length;
        
        // Adiciona o evento de change para todos os checkboxes
        checkTarefa.forEach(checkbox => {
            checkbox.addEventListener("change", concluirTarefa);
        });

        atualizarContagem()
    }    
}

function atualizarContagem(){
    const tarefa = document.querySelectorAll('.tarefa')
    const itensRestantes = document.querySelector('.itensRestantes')
    const checkTarefa = document.querySelectorAll('.checkTarefa')
    quantidadeTarefa = tarefa.length

    for(var i = 0; i < checkTarefa.length; i++){
        if(checkTarefa[i].checked){
            quantidadeTarefa--
            itensRestantes.innerHTML = `${quantidadeTarefa} itens faltando`
        }else{
            itensRestantes.innerHTML = `${quantidadeTarefa} itens faltando`
        }
    }
}


function concluirTarefa(event) {
    const checkbox = event.target;
    const itensRestantes = document.querySelector('.itensRestantes');
    
    if (checkbox.checked) {
        quantidadeTarefa--;
    } else {
        quantidadeTarefa++;
    }
    
    itensRestantes.innerHTML = `${quantidadeTarefa} itens faltando`;
}

function excluirConcluidas(){
    const checkTarefa = document.querySelectorAll('.checkTarefa')
    for(var i = 0; i < checkTarefa.length; i++){
        if(checkTarefa[i].checked){
            checkTarefa[i].parentElement.remove()

        }
        else{
            
        }
    }

}

function filtrar(event){
    const todos = document.querySelector("#todos")
    const completo = document.querySelector("#completo")
    const incompleto = document.querySelector("#incompleto")
    const checkTarefa = document.querySelectorAll('.checkTarefa')
    
    if(event.target.innerText === 'Completos'){ // Completos
        event.target.classList.add('active')
        todos.classList.remove('active')
        incompleto.classList.remove('active')

        for(var i = 0; i < checkTarefa.length; i++){
            checkTarefa[i].parentElement.style.display = 'flex'

            if(checkTarefa[i].checked){
                checkTarefa[i].parentElement.style.display = 'flex'
            }else{
                checkTarefa[i].parentElement.style.display = 'none'
            }
        }

    } else if(event.target.innerText === 'Incompletos'){ // Incompletos
        event.target.classList.add('active')
        todos.classList.remove('active')
        completo.classList.remove('active')

        for(var i = 0; i < checkTarefa.length; i++){
            checkTarefa[i].parentElement.style.display = 'flex'

            if(checkTarefa[i].checked){
                checkTarefa[i].parentElement.style.display = 'none'
            }else{
                checkTarefa[i].parentElement.style.display = 'flex'
            }
        }

    } else{ // Todos
        event.target.classList.add('active')
        completo.classList.remove('active')
        incompleto.classList.remove('active')

        for(var i = 0; i < checkTarefa.length; i++){
            checkTarefa[i].parentElement.style.display = 'flex'

            if(checkTarefa[i].checked){
                checkTarefa[i].parentElement.style.display = 'flex'
            }else{
                checkTarefa[i].parentElement.style.display = 'flex'
            }
        }
    }

}