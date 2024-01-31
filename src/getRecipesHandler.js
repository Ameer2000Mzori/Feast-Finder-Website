import { getData } from './getData.js'
import { getRecipes } from './getRecipes.js'
// selecting elements
const searchBtn = document.getElementById('search-Btn')
const searchInput = document.getElementById('search-Input')

// gelobal variables
let searchTerm = `pizza`

// console.log('Hello World!')
searchBtn.addEventListener('click', () => {
  searchTerm = searchInput.value
  searchTerm
    ? getRecipes(searchTerm)
    : console.log('Please enter a search term')
})

getData(searchTerm)
