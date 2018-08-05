// React Imports
import React from 'react';

// React Native Imports
import { Text, View, TouchableOpacity, Platform } from 'react-native';

// React Redux Imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// React Navigation Imports
import { createStackNavigator } from 'react-navigation'

// React Icons Import
import { Ionicons } from '@expo/vector-icons'

// Reducers
import reducer from './reducers'

// Components
import DeckList from './components/DeckList'
import DeckDetails from './components/DeckDetails'
import Quiz from './components/Quiz'
import AddDeck from './components/AddDeck'
import AddQuestion from './components/AddQuestion'

const Navigator = createStackNavigator({
	Home: {
		screen: DeckList,
		navigationOptions: ({ navigation }) => {

			return {
				title: 'Flashcards',
				headerRight: (
					<TouchableOpacity
						style={{ paddingRight: 15 }}
						onPress={() => navigation.navigate('AddDeck')}
					>
						<Ionicons name='ios-add' size={37} />
					</TouchableOpacity>
				)
			}
		}
	},
	DeckDetails: {
		screen: DeckDetails,
		navigationOptions: {
			title: 'Deck Details'
		}
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: {
			title: 'Quiz'
		}
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			title: 'New Deck'
		}
	},
	AddQuestion: {
		screen: AddQuestion,
		navigationOptions: {
			title: 'New Card'
		}
	}
})

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={createStore(reducer)}>
      	<Navigator />
      </Provider>
    );
  }
}