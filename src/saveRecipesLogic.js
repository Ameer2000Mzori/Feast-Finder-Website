// selecting elements

const savedRecipes = [
  {
    title: 'Apple',
    image_url:
      'https://cdn.pixabay.com/photo/2017/04/28/17/00/apple-1500000_960_720.jpg',
  },
]

// functions
export const saveRecipe = (selectedTitle, selectedImg) => {
  console.log('newly selected title and img : ', selectedTitle, selectedImg)
  savedRecipes.push({
    title: 'new recipe',
    image_url:
      'https://cdn.pixabay.com/photo/2017/04/28/17/00/apple-1500000_960_720.jpg',
  })

  console.log('savedRecipes:', savedRecipes)
}
