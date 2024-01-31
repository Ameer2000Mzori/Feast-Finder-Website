// selecting elements
const mealCards = document.querySelectorAll('meal-Card')
const mainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)

mealCards.forEach((mealCard) => {
  mealCard.addEventListener('click', () => {
    console.log('clicked')
    console.log(mealCards)
  })
})
console.log(mealCards)
