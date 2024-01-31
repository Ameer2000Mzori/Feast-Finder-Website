// importing
import { showCard } from './showCard.js'

// using domcontent loaded event listener to wait untul the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Wrap the code in a setTimeout to wait for the elements to be created
  setTimeout(function () {
    const mealCards = document.querySelectorAll('#meal-Card')
    console.log('Number of meal cards:', mealCards.length)

    mealCards.forEach((card) => {
      card.addEventListener('click', () => {
        showCard(card)
      })
    })
  }, 1000) // Adjust the timeout as needed
})
