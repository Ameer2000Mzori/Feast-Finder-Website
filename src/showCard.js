// importing
import { saveRecipe, savedRecipes } from './saveRecipesLogic.js'

// selecting elements
const MainBottomRightWrapper = document.getElementById(
  'Main-Bottom-Right-Wrapper'
)
export const showCard = (card) => {
  const selectedCardName = card.firstElementChild.textContent
  console.log('selectedCardName:', selectedCardName)

  const selectedCardImg = card.lastElementChild.src
  console.log('slectedCardImg:', selectedCardImg)

  const showedMealRightCard = document.createElement('div')
  showedMealRightCard.class = `meal-View h-[100%] w-[100%] bg-orange-100 rounded-md" id="showed-Meal-Right-Card`
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
    'w-[100px] h-[100px] rounded-full bg-white flex flex-col text-center items-center justify-center hover:bg-slate-200 active:bg-slate-400'

  const icon = document.createElement('i')

  let isFavoRecipt = savedRecipes.some((savedRecipeNames) => {
    return savedRecipeNames.title === selectedCardName
  })

  console.log(selectedCardName, 'is', isFavoRecipt)

  if (isFavoRecipt) {
    icon.className = 'fa-solid fa-bookmark text-[2rem]'
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
    console.log('this is title', h1.textContent)
    console.log('this is img', img.src)
    let selectedTitle = h1.textContent
    let selectedImg = img.src
    saveRecipe(selectedTitle, selectedImg)
    icon.className = icon.className.replace(
      'fa-regular fa-bookmark',
      'fa-solid fa-bookmark'
    )
  })
}
