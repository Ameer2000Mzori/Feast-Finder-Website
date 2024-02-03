// importing
import { showNotification } from './notifications.js'

// get data from local storage if there is any data
export let recipiesData = JSON.parse(localStorage.getItem('recipiesData')) || []

// functions
export const saveRecipe = (selectedTitle, selectedImg) => {
  let isThereRecipe = recipiesData.some((recipes) => {
    return recipes.title === selectedTitle
  })

  if (!isThereRecipe) {
    showNotification(1)
    console.log('is There Recipe? :', isThereRecipe)
    console.log('newly selected title and img : ', selectedTitle, selectedImg)
    let newRecipe = {
      title: selectedTitle,
      image_url: selectedImg,
    }
    recipiesData.push(newRecipe)
    localStorage.setItem('recipiesData', JSON.stringify(recipiesData))
  } else {
    console.log('this recipe is already in recipiesData')
  }
  console.log('recipiesData:', recipiesData)
}
