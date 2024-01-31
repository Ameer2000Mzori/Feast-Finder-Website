// importing functions
import { getData } from './getData.js'

// selecting elements
const searchBtn = document.getElementById('search-Btn')
const searchInput = document.getElementById('search-Input')

// gelobal variables
let searchTerm = `pizza`

// functions

// fter click on seach button the function will be called
const getRecipes = (searchTerm) => {
  console.log('passed', searchInput.value)
  let seacrchTimer = 0
  //
  let seachInterval = setInterval(() => {
    seacrchTimer += 1
    console.log(seacrchTimer)

    if (seacrchTimer > 4) {
      seacrchTimer = 0
      searchTerm = searchInput.value
      getData(searchTerm)
      clearInterval(seachInterval)
    }
  }, 500)
}

// events

// console.log('Hello World!')
searchBtn.addEventListener('click', () => {
  searchTerm = searchInput.value
  searchTerm
    ? getRecipes(searchTerm)
    : console.log('Please enter a search term')
})

getData(searchTerm)
