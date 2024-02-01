// importing
import { saveRecipe, recipiesData } from './saveRecipesLogic.js'

// selecting elements
const MainBottomRightWrapper = document.getElementById(
  'Main-Bottom-Right-Wrapper'
)
export let showCard = (card) => {
  let selectedCardName = card.firstElementChild.textContent.trim()
  console.log('selectedCardName:', selectedCardName)

  let selectedCardImg = card.lastElementChild.src
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

  innerDiv.appendChild(h1)
  div2.appendChild(innerDiv)

  const button = document.createElement('button')
  button.id = 'meal-Fvo-Btn'
  button.className =
    'w-[75px] h-[75px] rounded-full bg-white flex flex-col text-center items-center justify-center hover:bg-slate-200 active:bg-slate-400'

  const icon = document.createElement('i')

  recipiesData.forEach((savedone) => {
    console.log(savedone.title)
    console.log(savedone.image_url)
  })

  let isFavoRecipt = recipiesData.some((savedRecipeNames) => {
    return savedRecipeNames.title === selectedCardName
  })

  console.log(selectedCardName, 'is', isFavoRecipt)

  if (isFavoRecipt) {
    icon.className = 'fa-solid fa-bookmark text-[2rem]'
    const deleteRecipeBtn = document.createElement('button')
    deleteRecipeBtn.className =
      'flex flex-col text-center justify-evenly items-center w-[75px] h-[75px] rounded-full bg-red-600 text-white'
    const deleteIcon = document.createElement('i')
    deleteIcon.className = ' fa-solid fa-trash text-[2rem]'
    deleteRecipeBtn.appendChild(deleteIcon)
    div2.appendChild(deleteRecipeBtn)

    // delete btn when clicked  the selected recipe will be removed
    deleteRecipeBtn.addEventListener('click', () => {
      console.log('delete btn clicked')
      let selectedTitle = h1.textContent
      let isThereRecipe = recipiesData.find((recipes) => {
        return recipes.title === selectedTitle
      })
      if (isThereRecipe) {
        console.log('your recept is found', isThereRecipe)
        console.log('your recept is found title', isThereRecipe.title)
        console.log('this is your saved recipes: ', recipiesData)
        recipiesData = recipiesData.filter(
          (recipe) => recipe.title !== isThereRecipe.title
        )
        console.log('recipiesData after delete item :', recipiesData)
      }
    })
  } else {
    icon.className = 'fa-regular fa-bookmark text-[2rem]'
  }

  button.appendChild(icon)
  div2.appendChild(button)

  MainBottomRightWrapper.innerHTML = ``
  showedMealRightCard.append(div1)
  showedMealRightCard.append(div2)
  MainBottomRightWrapper.append(showedMealRightCard)

  // favo btn event listener
  button.addEventListener('click', () => {
    console.log('button clicked')

    let selectedTitle = h1.textContent
    let selectedImg = img.src

    console.log('this is selected title', selectedTitle)
    console.log('this is selected img', selectedImg)

    let isThereRecipe = recipiesData.find((recipes) => {
      return recipes.title === selectedTitle
    })

    if (!isThereRecipe) {
      saveRecipe(selectedTitle, selectedImg)
      icon.className = icon.className.replace(
        'fa-regular fa-bookmark',
        'fa-solid fa-bookmark'
      )
      selectedTitle = ''
      selectedImg = ''
    } else {
      console.log('this recipe is already in recipiesData')
      selectedTitle = ''
      selectedImg = ''
    }
  })
}
