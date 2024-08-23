document.querySelector('.quantidadeInput').addEventListener('input', function() {
    this.style.setProperty('--progress', (this.value - this.min) / (this.max - this.min) * 100 + '%');
});
// Barra de progreção

const quantidadeInput = document.querySelector('.quantidadeInput');
const caracteres = document.querySelector('.caracteres');

quantidadeInput.addEventListener('input', () => {
    caracteres.textContent = quantidadeInput.value;
});
caracteres.textContent = quantidadeInput.value;
// Numero da barra de progreção

const btn = document.querySelector('.btn')
const geraSenha = document.querySelector('.geraSenha')
const maiusculasInput = document.querySelector('.maiusculasInput')
const minusculasInput = document.querySelector('.minusculasInput')
const numerosInput = document.querySelector('.numerosInput')
const simbolosInput = document.querySelector('.simbolosInput')
const forcaSpan = document.querySelector('.forçaSpan') 

function gerar() {
    if(quantidadeInput.value <= 0){
        alert('ERRO - (Adicione quantidade de letras)')
}else{ 
    if(maiusculasInput.checked || minusculasInput.checked || numerosInput.checked || simbolosInput.checked){
        let letras = ''

        if (maiusculasInput.checked) {
            letras += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (minusculasInput.checked) {
            letras += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (numerosInput.checked) {
            letras += '1234567890';
        }
        if (simbolosInput.checked) {
            letras += '!@#$%&*';
        }
        
        const quantidade = quantidadeInput.value;
    
    
        let letrasAleatorias = '';
        for (let i = 0; i < quantidade; i++) {
            const letraAleatoria = letras.charAt(Math.floor(Math.random() * letras.length));
            letrasAleatorias += letraAleatoria;
        }
        geraSenha.innerText = letrasAleatorias;

        let forca = 0;
        if (letrasAleatorias.length >= 8) {
            forca++;
        }
        if (/[A-Z]/.test(letrasAleatorias)) {
            forca++;
        }
        if (/[a-z]/.test(letrasAleatorias)) {
            forca++;
        }
        if (/[0-9]/.test(letrasAleatorias)) {
            forca++;
        }
        if (/[!@#$%&*]/.test(letrasAleatorias)) {
            forca++;
        }
        
        if (forca <= 2) {
            forcaSpan.innerHTML = 'Fraca'
            forcaSpan.style.color = 'Red'

        } else if (forca <= 4) {
            forcaSpan.innerHTML = 'Média'
            forcaSpan.style.color = 'Orange'

        } else if (forca <= 5){
            forcaSpan.innerHTML = 'Forte'
            forcaSpan.style.color = '#A3FFAA'
        }

        }

    else{
        alert('ERRO - (Marque pelo menos uma opção)')
    }
}
}

async function clipboardCopy() {
    let text = document.querySelector(".geraSenha").textContent;
    try {
        await navigator.clipboard.writeText(text);
        alert('Senha Copiada!');
    } catch (err) {
    }
}