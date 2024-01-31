// selecting elements
const mealCards = document.querySelectorAll('#meal-Card')
const selectedRecipe = () => {}

// event listeners
mealCards.forEach((mealCard) => {
  mealCard.addEventListener('click', selectedRecipe)
})
