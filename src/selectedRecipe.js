document.addEventListener('DOMContentLoaded', function () {
  // Wrap the code in a setTimeout to wait for the elements to be created
  setTimeout(function () {
    const mealCards = document.querySelectorAll('#meal-Card')
    console.log('Number of meal cards:', mealCards.length)

    mealCards.forEach((card) => {
      card.addEventListener('click', () => {
        console.log('Card clicked:', card)
      })
    })
  }, 1000) // Adjust the timeout as needed
})
