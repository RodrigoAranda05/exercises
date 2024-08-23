const btnRes = document.querySelector('.btn-res')
const respostaA = document.querySelector('#opcaoA p')
const respostaB = document.querySelector('#opcaoB p')
const respostaC = document.querySelector('#opcaoC p')
const respostaD = document.querySelector('#opcaoD p')
const pergunta = document.querySelector('.texto-g')
const contagem = document.querySelector('.texto-p')
const alternativas = document.querySelector('.resposta')
const temas = document.querySelector('.temas')
const score = document.querySelector('.acertos')
const popup = document.querySelector('.popup')
const certos = document.querySelector('.certos')
const titulo = document.querySelector('.titulo')
const tituloI = document.querySelector('.titulo i')
const tituloP = document.querySelector('.titulo p')

let perguntaAtual = 0
let acertos = 0

function html() {
    Todasrespostas = TodasrespostasHTML
    temas.style.display = 'none'
    btnRes.style.display = 'flex'
    alternativas.style.display = 'flex'

    pergunta.innerHTML = Todasrespostas[perguntaAtual].question
    score.innerHTML = `0 Acertos de 10`
    contagem.innerHTML = `1 Pergunta de 10`

    respostaA.innerHTML = Todasrespostas[perguntaAtual].options[0];
    respostaB.innerHTML = Todasrespostas[perguntaAtual].options[1];
    respostaC.innerHTML = Todasrespostas[perguntaAtual].options[2];
    respostaD.innerHTML = Todasrespostas[perguntaAtual].options[3];

    respostaCorreta = Todasrespostas[perguntaAtual].correct;
}

function css() {
    Todasrespostas = TodasrespostasCSS
    temas.style.display = 'none'
    btnRes.style.display = 'flex'
    alternativas.style.display = 'flex'

    pergunta.innerHTML = Todasrespostas[perguntaAtual].question
    score.innerHTML = `0 Acertos de 10`
    contagem.innerHTML = `1 Pergunta de 10`

    respostaA.innerHTML = Todasrespostas[perguntaAtual].options[0];
    respostaB.innerHTML = Todasrespostas[perguntaAtual].options[1];
    respostaC.innerHTML = Todasrespostas[perguntaAtual].options[2];
    respostaD.innerHTML = Todasrespostas[perguntaAtual].options[3];

    respostaCorreta = Todasrespostas[perguntaAtual].correct;
}

function js() {
    Todasrespostas = TodasrespostasJS
    temas.style.display = 'none'
    btnRes.style.display = 'flex'
    alternativas.style.display = 'flex'

    pergunta.innerHTML = Todasrespostas[perguntaAtual].question
    score.innerHTML = `0 Acertos de 10`
    contagem.innerHTML = `1 Pergunta de 10`

    respostaA.innerHTML = Todasrespostas[perguntaAtual].options[0];
    respostaB.innerHTML = Todasrespostas[perguntaAtual].options[1];
    respostaC.innerHTML = Todasrespostas[perguntaAtual].options[2];
    respostaD.innerHTML = Todasrespostas[perguntaAtual].options[3];

    respostaCorreta = Todasrespostas[perguntaAtual].correct;
}

function jogo() {
    Todasrespostas = TodasrespostasJogo
    temas.style.display = 'none'
    btnRes.style.display = 'flex'
    alternativas.style.display = 'flex'

    pergunta.innerHTML = Todasrespostas[perguntaAtual].question
    score.innerHTML = `0 Acertos de 10`
    contagem.innerHTML = `1 Pergunta de 10`

    respostaA.innerHTML = Todasrespostas[perguntaAtual].options[0];
    respostaB.innerHTML = Todasrespostas[perguntaAtual].options[1];
    respostaC.innerHTML = Todasrespostas[perguntaAtual].options[2];
    respostaD.innerHTML = Todasrespostas[perguntaAtual].options[3];

    respostaCorreta = Todasrespostas[perguntaAtual].correct;
}

// Selecionar o botao
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.resposta .btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    document.querySelector('.btn-res').addEventListener('click', responder);
});

function responder() {
    const selectedButton = document.querySelector('.resposta .btn.selected');
    if (!selectedButton) {
        alert("Selecione uma resposta.");
        return;
    }

    if (selectedButton.id === respostaCorreta) {
        acertos++
        score.innerHTML = `${acertos} Acerto de 10`
        console.log(`Você Acertou TOTAL: ${acertos}`);
        selectedButton.classList.remove('selected');
    } else {
        console.log(`Você Errou TOTAL: ${acertos}`);
        selectedButton.classList.remove('selected');
    }

    perguntaAtual++;
    if(perguntaAtual < Todasrespostas.length){
        pergunta.innerHTML = Todasrespostas[perguntaAtual].question
        contagem.innerHTML = `${perguntaAtual + 1} Pergunta de 10`

        respostaA.innerHTML = Todasrespostas[perguntaAtual].options[0];
        respostaB.innerHTML = Todasrespostas[perguntaAtual].options[1];
        respostaC.innerHTML = Todasrespostas[perguntaAtual].options[2];
        respostaD.innerHTML = Todasrespostas[perguntaAtual].options[3];

        respostaCorreta = Todasrespostas[perguntaAtual].correct;
    } else {
        popup.style.display = 'flex'
        certos.innerHTML = `${acertos} Acertos` 

        if(Todasrespostas === TodasrespostasHTML){
        tituloI.classList.add('fa-brands', 'fa-html5')
        tituloP.innerHTML = 'HTML'

        }else if (Todasrespostas === TodasrespostasCSS){
            tituloI.classList.add('fa-brands', 'fa-css3-alt')
            tituloP.innerHTML = 'CSS'

        }else if (Todasrespostas === TodasrespostasJS){
            tituloI.classList.add('fa-brands', 'fa-js')
            tituloP.innerHTML = 'JS'

        }else{
            tituloI.classList.add('fa-solid', 'fa-gamepad')
            tituloP.innerHTML = 'JOGOS'
        }

    }
}

function jogarN(){
    location.reload();
}

const TodasrespostasHTML = [
    {
        question: "Qual é a tag HTML usada para criar um parágrafo?",
        options: ["&lt;div&gt;", "&lt;span&gt;", "&lt;p&gt;", "&lt;a&gt;"],
        answer: "&lt;p&gt;",
        correct: "opcaoC"
    },
    {
        question: "Qual tag é usada para criar um hiperlink?",
        options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        answer: "&lt;a&gt;",
        correct: "opcaoB"
    },
    {
        question: "Qual é o elemento HTML correto para inserir uma imagem?",
        options: ["&lt;img&gt;", "&lt;picture&gt;", "&lt;src&gt;", "&lt;image&gt;"],
        answer: "&lt;img&gt;",
        correct: "opcaoA"
    },
    {
        question: "Qual é a tag usada para definir um cabeçalho de nível 1?",
        options: ["&lt;header&gt;", "&lt;h1&gt;", "&lt;head&gt;", "&lt;title&gt;"],
        answer: "&lt;h1&gt;",
        correct: "opcaoB"
    },
    {
        question: "Qual atributo HTML é usado para definir o texto alternativo de uma imagem?",
        options: ["title", "alt", "src", "href"],
        answer: "alt",
        correct: "opcaoB"
    },
    {
        question: "Qual tag HTML é usada para criar uma lista não ordenada?",
        options: ["&lt;ol&gt;", "&lt;li&gt;", "&lt;ul&gt;", "&lt;list&gt;"],
        answer: "&lt;ul&gt;",
        correct: "opcaoC"
    },
    {
        question: "Qual elemento HTML é usado para criar um formulário?",
        options: ["&lt;form&gt;", "&lt;input&gt;", "&lt;button&gt;", "&lt;fieldset&gt;"],
        answer: "&lt;form&gt;",
        correct: "opcaoA"
    },
    {
        question: "Qual tag é usada para definir uma célula de tabela?",
        options: ["&lt;table&gt;", "&lt;tr&gt;", "&lt;td&gt;", "&lt;th&gt;"],
        answer: "&lt;td&gt;",
        correct: "opcaoC"
    },
    {
        question: "Qual atributo é usado para especificar o destino de um link?",
        options: ["src", "link", "href", "target"],
        answer: "href",
        correct: "opcaoC"
    },
    {
        question: "Qual é o elemento HTML correto para inserir um título de documento?",
        options: ["&lt;header&gt;", "&lt;h1&gt;", "&lt;meta&gt;", "&lt;title&gt;"],
        answer: "&lt;title&gt;",
        correct: "opcaoD"
    }
];

const TodasrespostasCSS = [
    {
        question: "Qual é a propriedade CSS usada para definir a cor do texto?",
        options: ["color", "background-color", "font-color", "text-color"],
        answer: "color",
        correct: "opcaoA"
    },
    {
        question: "Qual é a propriedade CSS usada para definir o tamanho da fonte?",
        options: ["font-size", "text-size", "font-style", "size"],
        answer: "font-size",
        correct: "opcaoA"
    },
    {
        question: "Qual é a propriedade CSS usada para centralizar um elemento horizontalmente?",
        options: ["margin-left", "margin-center", "text-align", "align-center"],
        answer: "text-align",
        correct: "opcaoC"
    },
    {
        question: "Qual é a propriedade CSS usada para adicionar uma sombra a um elemento?",
        options: ["shadow", "box-shadow", "text-shadow", "element-shadow"],
        answer: "box-shadow",
        correct: "opcaoB"
    },
    {
        question: "Qual é a propriedade CSS usada para definir a largura de um elemento?",
        options: ["width", "height", "size", "dimension"],
        answer: "width",
        correct: "opcaoA"
    },
    {
        question: "Qual é a propriedade CSS usada para definir a margem externa de um elemento?",
        options: ["margin", "padding", "border", "space"],
        answer: "margin",
        correct: "opcaoA"
    },
    {
        question: "Qual é a propriedade CSS usada para definir a cor de fundo de um elemento?",
        options: ["background-color", "color", "background", "bgcolor"],
        answer: "background-color",
        correct: "opcaoA"
    },
    {
        question: "Qual é a propriedade CSS usada para adicionar uma borda a um elemento?",
        options: ["border", "border-style", "border-color", "border-width"],
        answer: "border",
        correct: "opcaoA"
    },
    {
        question: "Qual é a propriedade CSS usada para definir a opacidade de um elemento?",
        options: ["transparency", "opacity", "alpha", "visibility"],
        answer: "opacity",
        correct: "opcaoB"
    },
    {
        question: "Qual é a propriedade CSS usada para definir a rotação de um elemento?",
        options: ["transform", "rotate", "rotation", "rotate-element"],
        answer: "transform",
        correct: "opcaoA"
    }
];

const TodasrespostasJS = [
    {
        question: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        options: ["var", "let", "const", "variable"],
        answer: "var",
        correct: "opcaoA"
    },
    {
        question: "Qual método é usado para imprimir uma mensagem no console em JavaScript?",
        options: ["log()", "print()", "console()", "display()"],
        answer: "log()",
        correct: "opcaoA"
    },
    {
        question: "Qual símbolo é usado para comentários de linha em JavaScript?",
        options: ["//", "/* */", "!--", "#"],
        answer: "//",
        correct: "opcaoA"
    },
    {
        question: "Qual é a função JavaScript usada para converter uma string em um número inteiro?",
        options: ["parseInt()", "parseFloat()", "stringToInt()", "toInteger()"],
        answer: "parseInt()",
        correct: "opcaoA"
    },
    {
        question: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        options: ["push()", "append()", "addToEnd()", "insert()"],
        answer: "push()",
        correct: "opcaoA"
    },
    {
        question: "Qual é o operador de igualdade estrita em JavaScript?",
        options: ["==", "===", "!=", "<="],
        answer: "===",
        correct: "opcaoB"
    },
    {
        question: "Qual é a função JavaScript usada para obter o comprimento de uma string?",
        options: ["size()", "length()", "count()", "sizeOf()"],
        answer: "length()",
        correct: "opcaoB"
    },
    {
        question: "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
        options: ["if-else", "for", "while", "switch-case"],
        answer: "if-else",
        correct: "opcaoA"
    },
    {
        question: "Qual método é usado para converter um objeto JavaScript em uma string JSON?",
        options: ["parse()", "stringify()", "serialize()", "toJSON()"],
        answer: "stringify()",
        correct: "opcaoB"
    },
    {
        question: "Qual é a função JavaScript usada para gerar números aleatórios?",
        options: ["random()", "rand()", "generateRandom()", "randomNumber()"],
        answer: "random()",
        correct: "opcaoA"
    }
];

const TodasrespostasJogo = [
    {
        question: "Qual é o nome do personagem principal do jogo 'The Legend of Zelda'?",
        options: ["Mario", "Link", "Zelda", "Ganondorf"],
        answer: "Link",
        correct: "opcaoB"
    },
    {
        question: "Qual é o nome do planeta em que se passa a maior parte do jogo 'Metroid'?",
        options: ["Zebes", "Tatooine", "Hyrule", "Mushroom Kingdom"],
        answer: "Zebes",
        correct: "opcaoA"
    },
    {
        question: "Qual é o objetivo principal do jogo 'Super Mario Bros'?",
        options: ["Resgatar a Princesa Peach", "Salvar o mundo", "Conquistar o Reino dos Cogumelos", "Derrotar Bowser"],
        answer: "Resgatar a Princesa Peach",
        correct: "opcaoA"
    },
    {
        question: "Em que jogo o protagonista se aventura para salvar sua irmã Zelda?",
        options: ["The Legend of Zelda", "The Legend of Zelda: Majora's Mask", "The Legend of Zelda: Ocarina of Time", "The Legend of Zelda: Twilight Princess"],
        answer: "The Legend of Zelda",
        correct: "opcaoA"
    },
    {
        question: "Qual é o nome do vilão principal da série de jogos 'Sonic the Hedgehog'?",
        options: ["Dr. Robotnik", "Bowser", "Ganondorf", "King Dedede"],
        answer: "Dr. Robotnik",
        correct: "opcaoA"
    },
    {
        question: "Qual é o objetivo principal do jogador em 'Pokémon'?",
        options: ["Capturar e treinar Pokémon", "Construir uma cidade", "Resolver quebra-cabeças", "Explorar masmorras"],
        answer: "Capturar e treinar Pokémon",
        correct: "opcaoA"
    },
    {
        question: "Em que jogo o jogador controla um grupo de heróis para derrotar um vilão chamado Sephiroth?",
        options: ["Final Fantasy VII", "Kingdom Hearts", "Dragon Quest", "Chrono Trigger"],
        answer: "Final Fantasy VII",
        correct: "opcaoA"
    },
    {
        question: "Qual é o nome do personagem principal da série de jogos 'The Witcher'?",
        options: ["Geralt of Rivia", "Dovahkiin", "Aloy", "Kratos"],
        answer: "Geralt of Rivia",
        correct: "opcaoA"
    },
    {
        question: "Em qual jogo o jogador deve construir e gerenciar uma cidade virtual?",
        options: ["SimCity", "The Sims", "Cities: Skylines", "Age of Empires"],
        answer: "SimCity",
        correct: "opcaoA"
    },
    {
        question: "Qual é o nome do protagonista do jogo 'Assassin's Creed'?",
        options: ["Ezio Auditore", "Altair Ibn-La'Ahad", "Connor Kenway", "Bayek of Siwa"],
        answer: "Ezio Auditore",
        correct: "opcaoA"
    }
];


