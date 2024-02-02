export const showNotification = (stageNotification) => {
  if (stageNotification === 1) {
    console.warn('item  is deleted')
  } else if (stageNotification === 2) {
    console.warn('item added to favorite list')
  } else if (stageNotification === 3) {
    console.warn('item is already in favorite list')
  } else if (stageNotification === 4) {
    console.warn('searching for item')
  }
}
