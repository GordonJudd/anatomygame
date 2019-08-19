


// Card data

const cardsArray = [
    {
    name: 'abduction',
    img: 'images/shoulder/abduction.png',
    },
    {
    name: 'abduction',
    img: 'images/shoulder/abductionAns.png',
    },
    {
    name: 'extension',
    img: 'images/shoulder/extension.png',
    },
    {
    name: 'extension',
    img: 'images/shoulder/extensionAns.png',
    },    
    {
    name: 'flexion',
    img: 'images/shoulder/flexion.png',
    },
    {
    name: 'flexion',
    img: 'images/shoulder/flexionAns.png',
    },
    {
    name: 'horAbduction',
    img: 'images/shoulder/horAbduction.png',
    },
    {
    name: 'horAbduction',
    img: 'images/shoulder/horAbductionAns.png',
    },
    {
    name: 'horAdduction',
    img: 'images/shoulder/horAdduction.png',
    },
    {
    name: 'horAdduction',
    img: 'images/shoulder/horAdductionAns.png',
    },
    {
    name: 'leRotation',
    img: 'images/shoulder/leRotation.png',
    },
    {
    name: 'leRotation',
    img: 'images/shoulder/leRotationAns.png',
    },
    {
    name: 'miRotation',
    img: 'images/shoulder/miRotation.png',
    },
    {
    name: 'miRotation',
    img: 'images/shoulder/miRotationAns.png',
    },
    {
    name: 'joker',
    img: 'images/joker.png',
    },
    {
    name: 'joker',
    img: 'images/joker.png',
    },
]

const imgSource = "front1"

// Add match CSS
const match = () => {
    var selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
      card.classList.add('match')
      
      })
      guessCounter += 1;
      console.log ('Score equals' + " " + guessCounter)
      if (guessCounter == 8) { 
        setTimeout(function(){ 
          alert('Congratulations on completing this Game!'); }, );
          document.location.reload();
        }
  }
