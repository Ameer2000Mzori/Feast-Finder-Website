// selecting elements

// gelobal variables
const API_URL =
  'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=652fd856-9ae7-4c74-a0f1-c78e8de3a994'

// fetch data functions

const getData = async () => {
  try {
    const recipes = await fetch(API_URL)
    data = await recipes.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('this is the finilly')
  }
}
// functions

// events

getData()
// console.log('Hello World!')
