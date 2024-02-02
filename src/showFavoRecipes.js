// imoprting functions
import { showData } from './showData.js'
import { recipiesData } from './saveRecipesLogic.js'
import { loadingAnimation } from './loadingAnimations.js'
import { thereIsNoRecipes } from './thereIsNoRecipes.js'

// import { showCard } from './showCard.js'

// selecting elements
const bookMarksBox = document.getElementById('book-Marks-Box')
const MainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)
const MainBottomRightWrapper = document.getElementById(
  'Main-Bottom-Right-Wrapper'
)
// functions

// this function shows favo recpices
const showFavoRecpices = () => {
  loadingAnimation(true)

  recipiesData.length > 0 ? showAndSelectRecipe() : thereIsNoRecipes()
}

// here is our selecte recipe function

const showAndSelectRecipe = () => {
  console.log('we are in function selectRecipe:', recipiesData)
  MainBottomRightWrapper.innerHTML = ''
  MainBottomLeftWrapper.innerHTML = ''

  getFavoRecipesAndSelecte(recipiesData[0])
  showFavoRecpicesRow(recipiesData)
}

// get favo recpices and selecte recipe
const getFavoRecipesAndSelecte = (card) => {
  console.log('slecected reccpie test')
  //
  let selectedCardName = card.title
  console.log('selectedCardName:', selectedCardName)

  let selectedCardImg = card.image_url
  console.log('slectedCardImg:', selectedCardImg)

  const showedMealRightCard = document.createElement('div')
  showedMealRightCard.className = `meal-View h-[100%] w-[100%] bg-orange-100 rounded-md" id="showed-Meal-Right-Card`
  showedMealRightCard.id = 'showed-Meal-Right-Card'

  const div1 = document.createElement('div')
  div1.className = 'w-[100%] h-[100%]'

  const img = document.createElement('img')
  img.id = 'meal-Img-2'
  img.className = 'w-[100%] h-[100%] object-cover rounded-xl'
  img.src = selectedCardImg
  img.alt = ''

  div1.appendChild(img)

  // Create the second div with a title and a button
  const div2 = document.createElement('div')
  div2.className =
    'w-[100%] h-[70px] flex flex-row text-center justify-evenly items-center absolute left-0 bottom-[10px] bg-orange-200'

  const innerDiv = document.createElement('div')
  innerDiv.className =
    'w-[300px] h-[50px] rounded-lg bg-slate-100 flex flex-col text-center items-center justify-center'

  const h1 = document.createElement('h1')
  h1.id = 'meal-Title-2'
  h1.className = 'text-[1.6rem] text-slate-900'
  h1.textContent = selectedCardName

  // our newly made delete button
  const deleteRecipeBtn = document.createElement('button')
  deleteRecipeBtn.className =
    'flex flex-col text-center justify-evenly items-center w-[75px] h-[75px] rounded-full bg-red-600 text-white'
  const deleteIcon = document.createElement('i')
  deleteIcon.className = ' fa-solid fa-trash text-[2rem]'
  deleteRecipeBtn.appendChild(deleteIcon)

  innerDiv.appendChild(h1)
  div2.appendChild(innerDiv)
  div2.appendChild(deleteRecipeBtn)
  MainBottomRightWrapper.innerHTML = ``
  showedMealRightCard.append(div1)
  showedMealRightCard.append(div2)
  MainBottomRightWrapper.append(showedMealRightCard)

  // delete button event listener
  deleteRecipeBtn.addEventListener('click', () => {
    console.log('delete button clicked')
    let dishName = selectedCardName
    console.log('dishName:', dishName)
    let foundRecipe = recipiesData.some((recipes) => {
      return recipes.title !== dishName.value
    })

    console.log('foundRecipe?:', foundRecipe)
    if (foundRecipe) {
      recipiesData = recipiesData.filter((recipes) => {
        return recipes.title !== dishName
      })

      console.log('recipiesData:', recipiesData)
      showFavoRecpices()
    } else {
      console.log('this recipe is not in recipiesData')
    }
    console.log('recipiesData:', recipiesData)
  })
}
// show favo recipices row
const showFavoRecpicesRow = (recipiesData) => {
  console.log('showed favo recipies row test')
  recipiesData.forEach((element) => {
    // creating element card
    const mealCard = document.createElement('div')
    mealCard.className =
      'w-[95%] h-[60px] mt-2 mb-2 bg-orange-300 hover:bg-orange-200 active:bg-orange-300 cursor-pointer rounded-lg flex flex-row text-center items-center justify-between pl-2 pr-5 p-4'
    mealCard.id = 'meal-Card'

    // giving the dta to the card

    let selectedTitle = element.title
    let selectedImg = element.image_url

    // Create an h1 element
    var titleElement = document.createElement('h1')
    titleElement.id = 'meal-Title-1'
    titleElement.className = 'font-mono font-bold text-slate-900'
    titleElement.textContent = selectedTitle

    // Create an img element
    var imgElement = document.createElement('img')
    imgElement.id = 'meal-Img-1'
    imgElement.className = 'w-[40px] h-[40px] rounded-full object-cover'
    imgElement.src = selectedImg
    imgElement.alt = ''

    // Append the titleElement and imgElement to the mealCard
    mealCard.appendChild(titleElement)
    mealCard.appendChild(imgElement)

    MainBottomLeftWrapper.appendChild(mealCard)

    // mail card click event listener
    mealCard.addEventListener('click', () => {
      console.log('this is title of clicked card ', selectedTitle)
      console.log('this is image of clicked card ', selectedImg)
      let card = {
        title: selectedTitle,
        image_url: selectedImg,
      }

      getFavoRecipesAndSelecte(card)
      // getFavoRecipesAndSelecte(element)
    })
  })
}

// event listeners
bookMarksBox.addEventListener('click', () => {
  console.log('clicked')
  showFavoRecpices()
})

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
