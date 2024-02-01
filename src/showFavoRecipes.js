// imoprting functions
import { showData } from './showData.js'
import { recipiesData } from './saveRecipesLogic.js'
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
      showData(recipiesData)
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

// const deleteRecipeBtn = document.createElement('button')
//     deleteRecipeBtn.className =
//       'flex flex-col text-center justify-evenly items-center w-[75px] h-[75px] rounded-full bg-red-600 text-white'
//     const deleteIcon = document.createElement('i')
//     deleteIcon.className = ' fa-solid fa-trash text-[2rem]'
//     deleteRecipeBtn.appendChild(deleteIcon)
//     div2.appendChild(deleteRecipeBtn)
