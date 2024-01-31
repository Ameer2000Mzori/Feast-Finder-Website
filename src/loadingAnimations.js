// selecting elements
const MainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)
const MainBottomRightWrapper = document.getElementById(
  'Main-Bottom-Right-Wrapper'
)
// console.log('this is loading animations file')

// function
const loadingAnimation = (isLoading) => {
  if (isLoading) {
    console.log('is loading')
    MainBottomLeftWrapper.innerHTML = ''
  } else {
    console.log('is not loading')
  }
}

loadingAnimation(true)
