// selecting elements
const searchBtn = document.getElementById('search-Btn')
const searchInput = document.getElementById('search-Input')

// gelobal variables
let searchTerm = `kebab`
const API_URL = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchTerm}&key=652fd856-9ae7-4c74-a0f1-c78e8de3a994`

// fetch data functions

// getting our data from the API
const getData = async () => {
  try {
    const recipes = await fetch(API_URL)
    const data = await recipes.json()
    console.log(data.data.recipes)
  } catch (error) {
    console.log(error)
    return { error: 'Failed to fetch data' } // Return an error object if there's an issue
  } finally {
    console.log('This is the finally block')
  }
}
// functions

// fter click on seach button the function will be called
const getRecipes = () => {
  console.log('passed', searchInput.value)
}
// events

getData()
// console.log('Hello World!')
searchBtn.addEventListener('click', () => {
  searchInput.value
    ? getRecipes(searchInput.value)
    : console.log('Please enter a search term')
})
