// React Imports
import React, { Component } from 'react'

// React Native Imports 
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

// React Redux Imports
import { connect } from 'react-redux'

// Action Creators Imports
import { receiveDecks } from '../actions'

// AsyncStorage Helpers Imports
import { getDecks } from '../utils/helpers'

// React Navigation Imports
import { NavigationActions } from 'react-navigation'

// React Icons Imports
import { Ionicons } from '@expo/vector-icons'

// Style Imports
import { DeckListStyles } from '../utils/styles'

class DeckList extends Component {

	toDeckDetails = (title) => {

		this.props.navigation.navigate('DeckDetails', { title })

	}

	renderDeckItem = ({ item }) => {
		return (
			<TouchableOpacity 
				style={styles.deck}
				onPress={() => this.toDeckDetails(item.title)}
			>
				<Text>{item.title}</Text>
				<Text>{item.questions.length}</Text>
			</TouchableOpacity>
		)
	}

	componentDidMount() {

		getDecks().then((results) => {
			this.props.dispatch(receiveDecks(results))
		})

	}

	render() {

		return (
			<View style={styles.container}>
				<FlatList 
					data={this.props.decks}
					renderItem={this.renderDeckItem}
					keyExtractor={(item, index) => item.title}
				/>
			</View>
		)
	}

}

// Component Styles
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	deck: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		borderBottomColor: 'black',
		borderBottomWidth: 1
	}
})

// Map State to Props function
function mapStateToProps(decks) {
	return {
		decks: Object.keys(decks).map((deck) => decks[deck] )
	}
}

export default connect(mapStateToProps)(DeckList)