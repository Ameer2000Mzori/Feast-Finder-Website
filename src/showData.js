// importing
import { showCard } from './showCard.js'
//selecting elements
const mainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)

// show data functions
export const showData = (data) => {
  data.forEach((element) => {
    // creating element card
    const mealCard = document.createElement('div')
    mealCard.className =
      'w-[95%] h-[60px] mt-2 mb-2 bg-orange-300 hover:bg-orange-200 active:bg-orange-300 cursor-pointer rounded-lg flex flex-row text-center items-center justify-between pl-2 pr-5 p-4'
    mealCard.id = 'meal-Card'
    // selecting elements
    let selectedTitle = element.title
    let selectedImg = element.image_url

    // Create an h1 element
    let titleElement = document.createElement('h1')
    titleElement.id = 'meal-Title-1'
    titleElement.className =
      'font-mono font-bold text-slate-900 sm:text-[0.6rem] md:text-[0.9rem] lg:text-[1.2rem] text-start'
    titleElement.textContent = selectedTitle

    // Create an img element
    let imgElement = document.createElement('img')
    imgElement.id = 'meal-Img-1'
    imgElement.className = 'w-[40px] h-[40px] rounded-full object-cover'
    imgElement.src = selectedImg
    imgElement.alt = ''

    // Append the titleElement and imgElement to the mealCard
    mealCard.append(titleElement)
    mealCard.append(imgElement)
    mainBottomLeftWrapper.append(mealCard)

    // meal card click event listener
    mealCard.addEventListener('click', () => {
      console.log('this is title of clicked card ', selectedTitle)
      console.log('this is image of clicked card ', selectedImg)
      let card = {
        title: selectedTitle,
        image_url: selectedImg,
      }

      showCard(card)
    })
  })
}
