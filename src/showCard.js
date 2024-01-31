// importing elements
const MainBottomRightWrapper = document.getElementById(
  'Main-Bottom-Right-Wrapper'
)
export const showCard = (card) => {
  const selectedCardName = card.firstElementChild.textContent
  console.log('selectedCardName:', selectedCardName)

  const selectedCardImg = card.lastElementChild.src
  console.log('slectedCardImg:', selectedCardImg)

  const showedMealRightCard = document.createElement('div')
  showedMealRightCard.class = `meal-View h-[100%] w-[100%] bg-orange-100 rounded-md" id="showed-Meal-Right-Card`
  showedMealRightCard.id = 'showed-Meal-Right-Card'
  showedMealRightCard.innerHTML = `
  <div class="w-[100%] h-[100%]">
  <img
    id="meal-Img-2"
    class="w-[100%] h-[100%] object-cover rounded-xl"
    src="${selectedCardImg}"
    alt=""
  />
</div>
<div
  class="w-[100%] h-[70px] flex flex-row text-center justify-evenly items-center absolute left-0 bottom-[10px] bg-orange-200"
>
  <div
    class="w-[300px] h-[50px] rounded-lg bg-slate-100 flex felx-col text-center items-center justify-center"
  >
    <h1 id="meal-Title-2" class="text-[1.6rem] text-slate-900">
      ${selectedCardName}
    </h1>
  </div>
  <button
    id="meal-Fvo-Btn"
    class="w-[100px] h-[100px] rounded-full bg-white flex felx-col text-center items-center justify-center hover:bg-slate-200 active:bg-slate-400"
  >
    <i class="fa-regular fa-bookmark text-[2rem]"></i>
  </button>
</div>
    `

  MainBottomRightWrapper.innerHTML = ``
  MainBottomRightWrapper.append(showedMealRightCard)
}
