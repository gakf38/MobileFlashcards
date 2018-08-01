// React Imports
import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native'

class DeckList extends Component {

	renderDeckItem = ({ item }) => {
		return (
			<View style={styles.deck}>
				<Text>{item.title}</Text>
				<Text>{item.questions.length}</Text>
			</View>
		)
	}

	render() {

		// Temp Data
		const decks = [
			{
				title: "Test Deck",
				questions: [
					{
		        question: 'What is React?',
		        answer: 'A library for managing user interfaces'
		      },
		      {
		        question: 'Where do you make Ajax requests in React?',
		        answer: 'The componentDidMount lifecycle event'
					}
				]
			},
			{
				title: "Test Deck Two",
				questions: [
					{
		        question: 'Where do you make Ajax requests in React?',
		        answer: 'The componentDidMount lifecycle event'
					}
				]
			}]

		return (
			<View style={styles.container}>
				<FlatList 
					data={decks}
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