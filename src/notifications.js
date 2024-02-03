// selecting elements
const notificationsEl = document.getElementById('notifications')

// notifications arry of objects data
const notificationsArrData = [
  {
    id: 1,
    text: 'deleted successfully',
    color: 'red',
  },
  {
    id: 2,
    text: 'item added to favorite list',
    color: 'green',
  },
  {
    id: 3,
    text: 'item is already in favorite list',
    color: 'white',
  },
  {
    id: 4,
    text: 'searching for item',
    color: 'blue',
  },
]

// notification function
export const showNotification = (stageNotification) => {
  notificationsEl.textContent = notificationsArrData[stageNotification].text
  notificationsEl.style.backgroundColor =
    notificationsArrData[stageNotification].color
  if (notificationsArrData[stageNotification].color === 'white') {
    notificationsEl.style.color = 'black'
  } else {
    notificationsEl.style.color = 'white'
  }
  notificationsEl.style.opacity = '100'
  notificationsEl.style.transform = 'translateY(0%)'

  let notificationCount = 0
  let nitificationInterval = setInterval(() => {
    if (notificationCount > 4) {
      clearInterval(nitificationInterval)
      console.log('notificationCount:', notificationCount)
      removeNotifications()
    } else {
      notificationCount++
      console.log('notificationCount:', notificationCount)
    }
  }, 300)
}

//remove notification function
const removeNotifications = () => {
  notificationsEl.textContent = ''
  notificationsEl.style.backgroundColor = ''
  notificationsEl.style.color = ''
  notificationsEl.style.opacity = ''
  notificationsEl.style.transform = ''
}
// this is for testing and debugging
// showNotification(0)
