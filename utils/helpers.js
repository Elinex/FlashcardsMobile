import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const colors = {
  white: '#fff',
  darkBlue: '#17175A',
  orange: '#ffa500',
  gray: '#808080',
  red: '#ff0000'
}

export function guid(){
  function s4(){
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4()
}

const NOTIFICATION_KEY = 'APP_NOTIFICATIONS'

function createNotification(){
  return {
    title: 'FlashCards',
    body: "Don't forget to study with FlashCards today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function clearLocalNotification(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted'){
              Notifications.cancelAllScheduledNotificationsAsync()
              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          }
        )
      }
    }
  )
}
