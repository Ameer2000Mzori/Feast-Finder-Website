// imoprting functions
import { showData } from './showData.js'
import { recipiesData } from './saveRecipesLogic.js'
import { loadingAnimation } from './loadingAnimations.js'
// import { showCard } from './showCard.js'

// selecting elements
const bookMarksBox = document.getElementById('book-Marks-Box')
const MainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)
const MainBottomRightWrapper = document.getElementById(
  'Main-Bottom-Right-Wrapper'
)
// gelobal variables
let bookMarksShown = false

// functions

// this function shows favo recpices
const showFavoRecpices = () => {
  loadingAnimation(true)

  recipiesData ? selectRecipce() : console.log('no recipies data')
}

// here is our selecte recipe function

const selectRecipce = () => {
  console.log('we are in function selectRecipe:', recipiesData)
  MainBottomRightWrapper.innerHTML = ``

  MainBottomLeftWrapper.innerHTML = ''
}

// event listeners
bookMarksBox.addEventListener('click', () => {
  console.log('clicked')
  showFavoRecpices()
})

//////////////////////////
// let selectedCardName = recipiesData[0].title
// console.log('selectedCardName:', selectedCardName)

// let selectedCardImg = recipiesData[0].image_url
// console.log('slectedCardImg:', selectedCardImg)

// const showedMealRightCard = document.createElement('div')
// showedMealRightCard.className = `meal-View h-[100%] w-[100%] bg-orange-100 rounded-md" id="showed-Meal-Right-Card`
// showedMealRightCard.id = 'showed-Meal-Right-Card'

// const div1 = document.createElement('div')
// div1.className = 'w-[100%] h-[100%]'

// const img = document.createElement('img')
// img.id = 'meal-Img-2'
// img.className = 'w-[100%] h-[100%] object-cover rounded-xl'
// img.src = selectedCardImg
// img.alt = ''

// div1.appendChild(img)

// // Create the second div with a title and a button
// const div2 = document.createElement('div')
// div2.className =
//   'w-[100%] h-[70px] flex flex-row text-center justify-evenly items-center absolute left-0 bottom-[10px] bg-orange-200'

// const innerDiv = document.createElement('div')
// innerDiv.className =
//   'w-[300px] h-[50px] rounded-lg bg-slate-100 flex flex-col text-center items-center justify-center'

// const h1 = document.createElement('h1')
// h1.id = 'meal-Title-2'
// h1.className = 'text-[1.6rem] text-slate-900'
// h1.textContent = selectedCardName

// innerDiv.appendChild(h1)
// div2.appendChild(innerDiv)

// const deleteRecipeBtn = document.createElement('button')
// deleteRecipeBtn.className =
//   'flex flex-col text-center justify-evenly items-center w-[75px] h-[75px] rounded-full bg-red-600 text-white'
// const deleteIcon = document.createElement('i')
// deleteIcon.className = ' fa-solid fa-trash text-[2rem]'
// deleteRecipeBtn.appendChild(deleteIcon)
// div2.appendChild(deleteRecipeBtn)

// MainBottomRightWrapper.innerHTML = ``
// showedMealRightCard.append(div1)
// showedMealRightCard.append(div2)
// MainBottomRightWrapper.append(showedMealRightCard)

////////////////////// trashed //////////////////////
// let showFavoRecpicesCount = 0
// const showFavoRecpicesInterval = setInterval(() => {
//   if (showFavoRecpicesCount > 4) {
//     loadingAnimation(false)
//     clearInterval(showFavoRecpicesInterval)
//     bookMarksShown = true
//     MainBottomLeftWrapper.innerHTML = ''
//     showData(recipiesData)
//     console.log(recipiesData)
//   } else {
//     showFavoRecpicesCount++
//   }
// }, 700)
