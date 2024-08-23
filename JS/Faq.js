function faq(event){
    const resposta = event.target.parentNode.nextElementSibling; // esta proucurando a div da pergunta associada ao icone clicado

document.querySelectorAll('.resposta').forEach(res => { // faz com que so uma pergunta fique ativa por vez
    if (res !== resposta && res.style.display === 'block') {
        res.style.display = 'none';
        res.previousElementSibling.querySelector('.icon').src = "../IMG/FAQ/icon-plus.svg";
    }
});
    if (resposta.style.display == 'none' || resposta.style.display === '') { // Verifica se o display esta funcionando para ativar a pergunta e desativar
        resposta.style.display = 'block';
        event.target.src = "../IMG/FAQ/icon-minus.svg";
        
    } else {
        resposta.style.display = 'none';
        event.target.src = "../IMG/FAQ/icon-plus.svg";
    }
}

const icons = document.querySelectorAll('.icon'); // selecionando tods os icons

icons.forEach(icon => { //esta adicionando um onclick em todos os icons
    icon.addEventListener('click', faq);
});


/*
event.target: Isso se refere ao elemento que desencadeou o evento. No caso de um evento de clique, event.target é o elemento HTML que foi clicado, ou seja, o ícone (a tag <img> com a classe .icon).
parentNode é usado para acessar o nó pai do elemento que desencadeou o evento. No contexto dos ícones, o nó pai de um ícone (a tag <img>) é a div com a classe .pergunta.
nextElementSibling: Essa propriedade retorna o próximo elemento irmão do nó atual. Portanto, event.target.parentNode.nextElementSibling retorna o próximo elemento irmão da div com a classe .pergunta. No seu HTML, esse próximo elemento irmão é a div com a classe .resposta.



.forEach(...): Estamos iterando sobre cada elemento na lista retornada pelo querySelectorAll. A função de retorno de chamada é executada para cada elemento.
res => { ... }: Para cada elemento .resposta, estamos executando uma função de retorno de chamada que recebe o elemento atual como argumento. Neste caso, usamos res como o nome do parâmetro da função.
res.previousElementSibling.querySelector('.icon').src = "../IMG/FAQ/icon-plus.svg";: Esta linha está encontrando o ícone associado à resposta que estamos fechando (res.previousElementSibling.querySelector('.icon')) e alterando sua fonte de imagem para o ícone de "mais" (um ícone que indica que a resposta está fechada).



icons.forEach(...): Aqui, estamos usando o método forEach para iterar sobre todos os elementos selecionados pela variável icons. A variável icons contém todos os elementos HTML que têm a classe .icon, ou seja, todos os ícones em seu documento.
icon => { ... }: Este é um callback passado para o método forEach. Ele define o que será feito para cada elemento na lista icons. O parâmetro icon representa cada elemento individualmente durante a iteração.
icon.addEventListener('click', faq);: Aqui, estamos adicionando um ouvinte de evento de clique para cada ícone. Quando um ícone é clicado, a função faq será chamada. Isso significa que cada ícone terá a função faq como manipulador de eventos para o evento de clique.

*/
