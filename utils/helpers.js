// React Native Imports
import { AsyncStorage } from 'react-native'

// Expo Imports
import { Notifications, Permissions } from 'expo'

// AsyncStorage Keys
const DECK_STORAGE_KEY = 'MobileFlashcards'
const NOTIFICATION_KEY = 'MobileFlashcards:notifications'

// Get all existing Decks
export function getDecks() {

	return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {

		if (results)
		{
			return JSON.parse(results)
		}
		else
		{
			console.log('Initial Load')
			AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({}))
			return {}
		}

	})
}

// Get existing Deck by ID
export function getDeck(id) {

	return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {

		const decks = JSON.parse(results)
		
		if (decks[id])
		{
			return decks[id]
		}
		else
		{
			return null
		}
	})
}

// Create a new Deck with the given Title
export function saveDeckTitle(title) {

	return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {

		const decks = JSON.parse(results)

		decks[title] = {
			title: title,
			questions: []
		}

		AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(decks))

	})
}

// Add a new Card object into the questions array for the deck with the given Title
export function addCardToDeck(title, card) {

	return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {

		const decks = JSON.parse(results)

		decks[title].questions.push(card)

		AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(decks))

	})
}

// Helper function which returns the body of the notification to be displayed
function createNotification() {
  return {
    title: 'Don\'t forget to study!',
    body: "You have not completed any flashcard quizzes today",
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

// Set the initial study reminder Notification 
export function setNotification() {

	AsyncStorage.getItem(NOTIFICATION_KEY)
	.then(JSON.parse)
	.then((data) => {

		if (data === null)
		{
			Permissions.askAsync(Permissions.NOTIFICATIONS)
				.then(({ status }) => {
					if (status === 'granted')
					{
						Notifications.cancelAllScheduledNotificationsAsync()

						let tomorrow = new Date()
						tomorrow.setDate(tomorrow.getDate() + 1)
						tomorrow.setHours(19)
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
				})
		}

	})
}

// Clear any scheduled notifications
export function clearNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}