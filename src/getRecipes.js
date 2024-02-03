// import functions
import { getData } from './getData.js'
import { showNotification } from './notifications.js'
// importing elements
const MainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)

// fter click on seach button the function will be called
export const getRecipes = (searchTerm) => {
  let seacrchTimer = 0
  //
  let seachInterval = setInterval(() => {
    seacrchTimer += 1
    console.log(seacrchTimer)

    if (seacrchTimer > 4) {
      seacrchTimer = 0
      showNotification(2)
      MainBottomLeftWrapper.innerHTML = ``
      getData(searchTerm)
      clearInterval(seachInterval)
    }
  }, 500)
}
