

// Card data

const cardsArray = [
    {
    name: 'elevation',
    img: 'images/scapula/elevation.png',
    },
    {
    name: 'elevation',
    img: 'images/scapula/elevationAns.png',
    },
    {
    name: 'depression',
    img: 'images/scapula/depression.png',
    },
    {
    name: 'depression',
    img: 'images/scapula/depressionAns.png',
    },
    {
    name: 'abduction',
    img: 'images/scapula/abduction.png',
    },
    {
    name: 'abduction',
    img: 'images/scapula/abductionAns.png',
    },
    {
    name: 'adduction',
    img: 'images/scapula/adduction.png',
    },
    {
    name: 'adduction',
    img: 'images/scapula/adductionAns.png',
    },
    {
    name: 'upward',
    img: 'images/scapula/upward.png',
    },
    {
    name: 'upward',
    img: 'images/scapula/upwardAns.png',
    },
    {
    name: 'downward',
    img: 'images/scapula/downward.png',
    },
    {
    name: 'downward',
    img: 'images/scapula/downwardAns.png',
    },
]

const imgSource = "front"

// Add match CSS
const match = () => {
    var selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
      card.classList.add('match')
      
      })
      guessCounter += 1;
      console.log ('Score equals' + " " + guessCounter)
      if (guessCounter == 6) { 
        setTimeout(function(){ 
          alert('Congratulations on completing this Game!'); }, );
          document.location.reload();
        }
  }
