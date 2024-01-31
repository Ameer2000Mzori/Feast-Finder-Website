// selecting elements
const MainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)

// function
export const loadingAnimation = (isLoading) => {
  if (isLoading) {
    console.log('is loading')
    MainBottomLeftWrapper.innerHTML = `
      <img
      class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
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
