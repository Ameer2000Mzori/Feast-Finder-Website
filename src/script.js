// selecting elements
const searchBtn = document.getElementById('search-Btn')
const searchInput = document.getElementById('search-Input')

// gelobal variables
let searchTerm = `pizza`

// fetch data functions

// getting our data from the API
const getData = async (searchTerm) => {
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

// show the data for the user to see
// here we are gonna pass the dtata to the showData function
const showData = (data) => {
  data.forEach((element) => {
    console.log('title', element.title)
    console.log('publisher', element.publisher)
    console.log('image_url', element.image_url)
  })
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
