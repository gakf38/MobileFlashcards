// React Imports
import React, { Component } from 'react'

// React Native Imports
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native'

class DeckDetails extends Component {

	addCard = () => {

		// TODO: Navigate to the AddCard component

	}

	startQuiz = () => {

		// TODO: Navigate to the Quiz component

	}

	render() {

		return (
			<View style={styles.container}>

				{ true // replace with cards.length !== 1 
					
					? <Text style={styles.title}># Cards</Text>

					: <Text style={styles.title}># Card</Text>

				}

				<View>
				
					<TouchableOpacity 
						style={Platform.OS === 'ios' ? styles.ios_btn : styles.android_btn}
						onPress={this.addCard}
					>
						<Text style={styles.btn_text}>Add Card</Text>
					</TouchableOpacity>
					
					<TouchableOpacity 
						style={Platform.OS === 'ios' ? styles.ios_btn : styles.android_btn}
						onPress={this.startQuiz}
					>
						<Text style={styles.btn_text}>Start Quiz</Text>
					</TouchableOpacity>

				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: 20
	},
	title: {
		fontSize: 44
	},
	ios_btn: {
		borderWidth: 1,
		borderRadius: 7,
		padding: 10,
		margin: 10
	},
	android_btn: {
		borderWidth: 1,
		borderRadius: 2,
		padding: 10,
		margin: 10
	},
	btn_text: {
		textAlign: 'center',
		fontSize: 22
	}
})

export default DeckDetails