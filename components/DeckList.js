// React Imports
import React, { Component } from 'react'

// React Native Imports 
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

// React Navigation Imports
import { NavigationActions } from 'react-navigation'

// React Icons Imports
import { Ionicons } from '@expo/vector-icons'

// Style Imports
import { DeckListStyles } from '../utils/styles'

class DeckList extends Component {

	state = {
		decks: []
	}

	toDeckDetails = () => {

		this.props.navigation.navigate('DeckDetails')

	}

	renderDeckItem = ({ item }) => {
		return (
			<TouchableOpacity 
				style={styles.deck}
				onPress={this.toDeckDetails}
			>
				<Text>{item.title}</Text>
				<Text>{item.questions.length}</Text>
			</TouchableOpacity>
		)
	}

	componentDidMount() {

	}

	render() {

		return (
			<View style={styles.container}>
				<FlatList 
					data={this.state.decks}
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

export default DeckList