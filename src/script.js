// selecting elements
const searchBtn = document.getElementById('search-Btn')
const searchInput = document.getElementById('search-Input')

// gelobal variables
let searchTerm = `kebab`

// fetch data functions

// getting our data from the API
const getData = async (searchTerm) => {
  try {
    const recipes = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchTerm}&key=652fd856-9ae7-4c74-a0f1-c78e8de3a994`
    )
    const data = await recipes.json()
    console.log(data.data.recipes)
    showData(data.data.recipes)
  } catch (error) {
    console.log(error)
    return { error: 'Failed to fetch data' } // Return an error object if there's an issue
  } finally {
    console.log('This is the finally block')
  }
}
// functions

// fter click on seach button the function will be called
const getRecipes = (searchTerm) => {
  console.log('passed', searchInput.value)

  let seacrchTimer = 0

  let seachInterval = setInterval(() => {
    seacrchTimer += 1
    console.log(seacrchTimer)

    if (seacrchTimer > 4) {
      searchTerm = searchInput.value
      getData(searchTerm)
      clearInterval(seachInterval)
    }
  }, 1000)
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
  searchInput.value
    ? getRecipes(searchInput.value)
    : console.log('Please enter a search term')
})

getData(searchTerm)
