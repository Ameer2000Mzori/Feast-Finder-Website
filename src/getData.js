// importing functions
import { showData } from './showData.js'

// selecting elements
const searchInput = document.getElementById('search-Input')

// fetch data functions
export const getData = async (searchTerm) => {
  try {
    const recipes = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchTerm}&key=652fd856-9ae7-4c74-a0f1-c78e8de3a994`
    )
    const data = await recipes.json()
    // console.log(data.data.recipes)

    // if there are no recipes, return no recipes found message else call showData function function
    console.log(`our data is:`, data)
    data.data.recipes.length > 1
      ? showData(data.data.recipes)
      : console.log('No recipes found')
  } catch (error) {
    console.log(error)
    // Return an error object if there's an issue
    return { error: 'Failed to fetch data' }
  } finally {
    console.log('This is the finally block')
    searchInput.value = ''
  }
}
