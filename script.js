


// Card data

const cardsArray = [
    {
    name: 'elevation',
    img: 'images/elevation.png',
    },
    {
    name: 'elevation',
    img: 'images/elevationAns.png',
    },
    {
    name: 'depression',
    img: 'images/depression.png',
    },
    {
    name: 'depression',
    img: 'images/depressionAns.png',
    },

]




// Grab the div with an id of root
const game = document.getElementById('game')

// Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid)



// For each item in the cardsArray array...
cardsArray.forEach(item => {
    // Create a div
    const card = document.createElement('div')
  
    // Apply a card class to that div
    card.classList.add('card')
  
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name
  
    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`
  
    // Append the div to the grid section
    grid.appendChild(card)
  })

// let gameGrid = cardsArray.concat(cardsArray)

  cardsArray.sort(() => 0.5 - Math.random())