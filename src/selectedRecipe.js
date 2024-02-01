// importing
import { showCard } from './showCard.js'

// using domcontent loaded event listener to wait untul the DOM is loaded
export const selectedRecipe = () => {
  // Wrap the code in a setTimeout to wait for the elements to be created
  let selectedRecipeInterval = setInterval(function () {
    let mealCards = document.querySelectorAll('#meal-Card')

    console.log('Number of meal cards:', mealCards.length)

    mealCards.forEach((card) => {
      card.addEventListener('click', () => {
        showCard(card)
      })
    })
    clearInterval(selectedRecipeInterval)
  }, 1000) // Adjust the timeout as needed
}

selectedRecipe()
