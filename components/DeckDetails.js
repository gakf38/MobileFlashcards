// React Imports
import React, { Component } from 'react'

// React Native Imports
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native'

// React Navigation Imports
import { NavigationActions } from 'react-navigation'

class DeckDetails extends Component {

	toAddQuestion = () => {

		this.props.navigation.navigate('AddQuestion')

	}

	toQuiz = () => {

		this.props.navigation.navigate('Quiz')

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
						onPress={this.toAddQuestion}
					>
						<Text style={styles.btn_text}>Add Card</Text>
					</TouchableOpacity>
					
					<TouchableOpacity 
						style={Platform.OS === 'ios' ? styles.ios_btn : styles.android_btn}
						onPress={this.toQuiz}
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