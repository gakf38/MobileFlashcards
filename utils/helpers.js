// React Native Imports
import { AsyncStorage } from 'react-native'

// AsyncStorage Deck Key
const DECK_STORAGE_KEY = 'MobileFlashcards'

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

// 
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

//
export function addCardToDeck(title, card) {

	return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {

		const decks = JSON.parse(results)

		decks[title].questions.push(card)

		console.log('Decks: ', JSON.stringify(decks))

		AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(decks))

	})

}