// selecting elements
const notificationsEl = document.getElementById('notifications')
export const showNotification = (stageNotification) => {
  if (stageNotification === 1) {
    notificationsEl.textContent = 'deleted successfully'
    notificationsEl.style.backgroundColor = 'green'
    notificationsEl.style.color = 'white'
    notificationsEl.style.opacity = '100'
    notificationsEl.style.transform = 'translateY(0%)'
  } else if (stageNotification === 2) {
    console.warn('item added to favorite list')
    notificationsEl.textContent = 'item added to favorite list'
    notificationsEl.style.backgroundColor = 'green'
    notificationsEl.style.color = 'white'
    notificationsEl.style.opacity = '100'
    notificationsEl.style.transform = 'translateY(0%)'
  } else if (stageNotification === 3) {
    console.warn('item is already in favorite list')
    notificationsEl.textContent = 'item is already in favorite list'
    notificationsEl.style.backgroundColor = 'green'
    notificationsEl.style.color = 'white'
    notificationsEl.style.opacity = '100'
    notificationsEl.style.transform = 'translateY(0%)'
  } else if (stageNotification === 4) {
    console.warn('searching for item')
    notificationsEl.textContent = 'searching for item'
    notificationsEl.style.backgroundColor = 'green'
    notificationsEl.style.color = 'white'
    notificationsEl.style.opacity = '100'
    notificationsEl.style.transform = 'translateY(0%)'
  }
}
showNotification(1)
