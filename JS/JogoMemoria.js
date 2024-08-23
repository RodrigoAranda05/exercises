const grid = document.querySelector(".grid")
const timer = document.querySelector('.timer')

const characters = [
  'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'summer',
  'meeseeks',
  'scroopy',
];

const duplicateCharacter = [ ... characters, ...characters]
const messyArray = duplicateCharacter.sort(() => Math.random() - 0.5)

firstCard = ''
secondCard = ''
let lockboard = false

const revealCard = (event) => {

  if(lockboard) {
    return
  }

  if (event.target.parentElement.classList.contains('reveal-card') || event.target.parentElement.classList.contains('disabled-card')) {
    return;
  }

  event.target.parentElement.classList.add("reveal-card")
  const dataCharacter = event.target.parentElement.firstChild

  if(firstCard === ''){
    firstCard = dataCharacter
    firstCharacter = dataCharacter.getAttribute('data-Character')
  }

  else if(secondCard === ''){
      secondCard = dataCharacter
      secondCharacter = dataCharacter.getAttribute('data-Character')

    if(firstCharacter === secondCharacter){
      firstCard.classList.add('disabled-card')
      secondCard.classList.add('disabled-card')

      firstCard = ''
      secondCard = ''

      checkEndGame()

    }else{
      lockboard = true
      setTimeout(() => {
        firstCard.parentElement.classList.remove("reveal-card")
        secondCard.parentElement.classList.remove("reveal-card")

        firstCard = ''
        secondCard = ''
      lockboard = false
      }, 600);

    }
  }

  else{

    }

}

const createCard = () => {

 for(let i = 0; i < duplicateCharacter.length; i++){
    card = document.createElement("div")
    front = document.createElement("div")
    back = document.createElement("div")

    card.classList.add("card")
    front.classList.add('face', 'front');
    back.classList.add('face', 'back');

    front.style.backgroundImage = `url("../IMG/MEMORIA/${messyArray[i]}.png")`
    front.setAttribute("data-character", messyArray[i])

    card.addEventListener("click", revealCard)

    card.appendChild(front)
    card.appendChild(back)
    grid.appendChild(card)
}

/*messyArray.forEach(messyArray => {
  card = document.createElement("div")
  front = document.createElement("div")
  back = document.createElement("div")

  card.classList.add("card")
  front.classList.add('face', 'front');
  back.classList.add('face', 'back');

  front.style.backgroundImage = `url("../IMG/MEMORIA/${messyArray}.png")`
  front.setAttribute("data-character", messyArray)

  card.addEventListener("click", revealCard)

  card.appendChild(front)
  card.appendChild(back)
  grid.appendChild(card)
})*/

}

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card')

  if(disabledCards.length === duplicateCharacter.length){
    setTimeout(() => {
    alert("PARABENS VOCE TERMINOU")
    clearInterval(this.loop);
  }, 800);

  } else{
    return
  }

}

const startTimer = () => {
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);
}

window.onload = () => {
  currentTime = 0
  startTimer()
  createCard()
}

