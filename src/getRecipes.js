// import functions
import { getData } from './getData.js'

// fter click on seach button the function will be called
export const getRecipes = (searchTerm) => {
  console.log('passed', searchInput.value)
  let seacrchTimer = 0
  //
  let seachInterval = setInterval(() => {
    seacrchTimer += 1
    console.log(seacrchTimer)

    if (seacrchTimer > 4) {
      seacrchTimer = 0
      getData(searchTerm)
      clearInterval(seachInterval)
    }
  }, 500)
}
