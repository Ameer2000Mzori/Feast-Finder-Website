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
  let isThereRecipe = savedRecipes.some((recipes) => {
    return recipes.title === selectedTitle
  })

  if (!isThereRecipe) {
    console.log('isThereRecipe? :', isThereRecipe)
    console.log('newly selected title and img : ', selectedTitle, selectedImg)
    savedRecipes.push({
      title: selectedTitle,
      image_url: selectedImg,
    })
  } else {
    console.log('this recipe is already in savedRecipes')
  }
  console.log('savedRecipes:', savedRecipes)
}
