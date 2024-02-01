// imoprting functions
import { showData } from 'showData.js'
import { savedRecipes } from './saveRecipesLogic.js'

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
  bookMarksShown = true
  MainBottomLeftWrapper.innerHTML = ''
  showData(savedRecipes)
}
// event listeners
bookMarksBox.addEventListener('click', (e) => {
  console.log('clicked')
  showFavoRecpices()
})
