// selecting elements
const MainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)
const MainBottomRightWrapper = document.getElementById(
  'Main-Bottom-Right-Wrapper'
)
// console.log('this is loading animations file')

// function
export const loadingAnimation = (isLoading) => {
  if (isLoading) {
    console.log('is loading')
    MainBottomLeftWrapper.innerHTML = `
    <img
    class="absolute top-[35%] left-[35%]"
    src="./assets/loading.svg"
    alt=""
  />
    `
  } else {
    console.log('is not loading')
    MainBottomLeftWrapper.innerHTML = ``
  }
}

loadingAnimation(true)
