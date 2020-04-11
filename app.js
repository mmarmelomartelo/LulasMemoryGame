document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'Lula1',
      img: 'images/Lula1.jpg'
    },
    {
      name: 'lula2',
      img: 'images/lula2.jpg'
    },
    {
      name: 'lula3',
      img: 'images/lula3.jpg'
    },
    {
      name: 'lula4',
      img: 'images/lula4.jpg'
    },
    {
      name: 'lula5',
      img: 'images/lula5.jpg'
    },
    {
      name: 'lula6',
      img: 'images/lula6.jpg'
    },
    {
      name: 'lula7',
      img: 'images/lula7.jpg'
    },
    {
      name: 'lula8',
      img: 'images/lula8.jpg'
    },
    {
      name: 'lula9',
      img: 'images/lula9.jpg'
    },
    {
      name: 'lula10',
      img: 'images/lula10.jpg'
    },
    {
      name: 'lula11',
      img: 'images/lula11.jpg'
    },
    {
      name: 'lula12',
      img: 'images/lula12.jpg'
    },
    {
      name: 'lula13',
      img: 'images/lula13.jpg'
    },
    {
      name: 'lula14',
      img: 'images/lula14.jpg'
    },
    {
      name: 'lula15',
      img: 'images/lula15.jpg'
    },
    {
      name: 'lula16',
      img: 'images/lula16.jpg'
    },
    {
      name: 'lula17',
      img: 'images/lula17.jpg'
    },
    {
      name: 'lula18',
      img: 'images/lula18.jpg'
    },
    {
      name: 'Lula1',
      img: 'images/Lula1.jpg'
    },
    {
      name: 'lula2',
      img: 'images/lula2.jpg'
    },
    {
      name: 'lula3',
      img: 'images/lula3.jpg'
    },
    {
      name: 'lula4',
      img: 'images/lula4.jpg'
    },
    {
      name: 'lula5',
      img: 'images/lula5.jpg'
    },
    {
      name: 'lula6',
      img: 'images/lula6.jpg'
    },
    {
      name: 'lula7',
      img: 'images/lula7.jpg'
    },
    {
      name: 'lula8',
      img: 'images/lula8.jpg'
    },
    {
      name: 'lula9',
      img: 'images/lula9.jpg'
    },
    {
      name: 'lula10',
      img: 'images/lula10.jpg'
    },
    {
      name: 'lula11',
      img: 'images/lula11.jpg'
    },
    {
      name: 'lula12',
      img: 'images/lula12.jpg'
    },
    {
      name: 'lula13',
      img: 'images/lula13.jpg'
    },
    {
      name: 'lula14',
      img: 'images/lula14.jpg'
    },
    {
      name: 'lula15',
      img: 'images/lula15.jpg'
    },
    {
      name: 'lula16',
      img: 'images/lula16.jpg'
    },
    {
      name: 'lula17',
      img: 'images/lula17.jpg'
    },
    {
      name: 'lula18',
      img: 'images/lula18.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('Acertou, danado(a)!')
      cards[optionOneId].setAttribute('src', 'images/white.jpg')
      cards[optionTwoId].setAttribute('src', 'images/white.jpg')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg')
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
      alert('Errou ordinário(a)!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Parabéns! Você é um(a) Petista Safado(a)!'
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
