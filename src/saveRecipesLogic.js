// // selecting elements

// const savedRecipes = [
//   {
//     title: 'Apple',
//     image_url:
//       'https://cdn.pixabay.com/photo/2017/04/28/17/00/apple-1500000_960_720.jpg',
//   },
// ]

// const getButtons = () => {
//   let getButtonsInterval = setInterval(() => {
//     let mealFvoBtns = document.querySelectorAll('#meal-Fvo-Btn')

//     // functions
//     const saveRecipe = (btn) => {
//       let savedTitle =
//         btn.parentElement.parentElement.lastElementChild.firstElementChild
//           .textContent
//       let savedImg =
//         btn.parentElement.parentElement.firstElementChild.firstElementChild.src
//       savedRecipes.push({
//         title: savedTitle,
//         image_url: savedImg,
//       })

//       console.log(savedRecipes.length, savedRecipes)
//       console.log(mealFvoBtns)
//     }

//     // for each
//     mealFvoBtns.forEach((btn) => {
//       btn.addEventListener('click', () => {
//         saveRecipe(btn)
//       })
//     })
//     console.log(mealFvoBtns)
//     clearInterval(getButtonsInterval)
//   }, 1000)
// }

// getButtons()
