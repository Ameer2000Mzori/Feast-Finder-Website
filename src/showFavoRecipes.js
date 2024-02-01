// imoprting functions
import { showData } from './showData.js'
import { savedRecipes } from './saveRecipesLogic.js'
import { selectedRecipe } from './selectedRecipe.js'
import { loadingAnimation } from './loadingAnimations.js'

// selecting elements
const bookMarksBox = document.getElementById('book-Marks-Box')
const MainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)
// gelobal variables
let bookMarksShown = false

// functions

// this function shows favo recpices
const showFavoRecpices = () => {
  loadingAnimation(true)
  let showFavoRecpicesCount = 0
  const showFavoRecpicesInterval = setInterval(() => {
    if (showFavoRecpicesCount > 4) {
      loadingAnimation(false)
      clearInterval(showFavoRecpicesInterval)
      bookMarksShown = true
      MainBottomLeftWrapper.innerHTML = ''
      showData(savedRecipes)
      selectedRecipe()
    } else {
      showFavoRecpicesCount++
    }
  }, 700)
}
// event listeners
bookMarksBox.addEventListener('click', () => {
  console.log('clicked')
  showFavoRecpices()
})
