// selecting elements

// get data from local storage if there is any data
export let recipiesData = JSON.parse(localStorage.getItem('recipiesData')) || []

// {
//   title: 'Apple',
//   image_url:
//     'https://cdn.pixabay.com/photo/2017/04/28/17/00/apple-1500000_960_720.jpg',
// },

// functions
export const saveRecipe = (selectedTitle, selectedImg) => {
  let isThereRecipe = recipiesData.some((recipes) => {
    return recipes.title === selectedTitle
  })

  if (!isThereRecipe) {
    console.log('is There Recipe? :', isThereRecipe)
    console.log('newly selected title and img : ', selectedTitle, selectedImg)
    let newRecipe = {
      title: selectedTitle,
      image_url: selectedImg,
    }

    recipiesData.push(newRecipe)
    localStorage.setItem('recipiesData', JSON.stringify(recipiesData))
  } else {
    console.log('this recipe is already in recipiesData')
  }
  console.log('recipiesData:', recipiesData)
}
