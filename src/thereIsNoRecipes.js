const MainBottomLeftWrapper = document.getElementById(
  'Main-Bottom-Left-Wrapper'
)
export const thereIsNoRecipes = () => {
  MainBottomLeftWrapper.innerHTML = `
    <div class="text-center">
      <h1 class=" text-3xl font-bold text-gray-900">
        There are no recipes for that search
      </h1>
    </div>
  `
}
