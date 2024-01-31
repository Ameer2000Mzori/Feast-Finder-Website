//selecting elements
const mainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)

// show data functions
export const showData = (data) => {
  data.forEach((element) => {
    // creating element card
    const mealCard = document.createElement('div')
    mealCard.className =
      'w-[95%] h-[60px] mt-2 mb-2 bg-orange-300 hover:bg-orange-200 active:bg-orange-300 cursor-pointer rounded-lg flex flex-row text-center items-center justify-between pl-2 pr-5 p-4'
    mealCard.id = 'meal-Card'

    // giving the dta to the card

    mealCard.innerHTML = `

<h1 id="meal-Title-1" class="font-mono font-bold text-slate-900">
  ${element.title}
</h1>
<img
  id="meal-Img-1"
  class="w-[40px] h-[40px] rounded-full object-cover"
  src="${element.image_url}"
  alt=""
/>`
    mainBottomLeftWrapper.append(mealCard)
  })
}
