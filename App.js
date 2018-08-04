// React Imports
import React from 'react';

// React Native Imports
import { Text, View, TouchableOpacity, Platform } from 'react-native';

// React Navigation Imports
import { createStackNavigator } from 'react-navigation'

// React Icons Import
import { Ionicons } from '@expo/vector-icons'

// Components
import DeckList from './components/DeckList'
import DeckDetails from './components/DeckDetails'
import AddDeck from './components/AddDeck'
import AddQuestion from './components/AddQuestion'

function HeaderButton() {

	toAddDeck = () => {

		// Navigation to Add Deck 

	}

	return (
		<TouchableOpacity 
			style={{paddingRight: 15}}
			onPress={this.toAddDeck}
		>
			{
				Platform.OS === 'ios'
				? <Ionicons name='ios-add' size={37}/>
				: <Ionicons name='md-add' size={35}/>
			}
		</TouchableOpacity>
	)
}

const Navigator = createStackNavigator({
	Home: {
		screen: DeckList,
		navigationOptions: {
			title: 'Flashcards',
			headerRight: (
				<HeaderButton />
			),
		}
	},
	DeckDetails: {
		screen: DeckDetails
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			title: 'Add Deck'
		}
	},
	AddQuestion: {
		screen: AddQuestion,
		navigationOptions: {
			title: 'Add Question'
		}
	}
})

export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}
