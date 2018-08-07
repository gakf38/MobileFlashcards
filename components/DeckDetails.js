// React Imports
import React, { Component } from 'react'

// React Native Imports
import { Text, View, TouchableOpacity, Alert, StyleSheet, Platform } from 'react-native'

// React Redux Imports
import { connect } from 'react-redux'

// React Navigation Imports
import { NavigationActions } from 'react-navigation'

class DeckDetails extends Component {

	static navigationOptions = ({ navigation }) => ({
		title: `${navigation.state.params.title}`
	})

	toAddQuestion = () => {

		this.props.navigation.navigate('AddQuestion', {title: this.props.deck.title})

	}

	toQuiz = () => {

		if (this.props.deck.questions.length > 0)
		{
			this.props.navigation.navigate('Quiz', {title: this.props.deck.title})
		}
		else
		{
			Alert.alert(
				'No Cards!',
				'This deck currently no cards', 
				[
					{ text: 'Add Card', onPress: this.toAddQuestion },
					{ text: 'Cancel' }
				]
			)
		}

	}

	render() {

		const { title, questions } = this.props.deck

		return (
			<View style={styles.container}>

				{
					questions.length !== 1

					? <Text style={styles.title}>{questions.length} Cards</Text>
				
					: <Text style={styles.title}>{questions.length} Card</Text>			
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

					<TouchableOpacity 
						style={Platform.OS === 'ios' ? [styles.remove_btn, styles.ios_btn] : [styles.remove_btn, styles.android_btn]}
					>
						<Text style={[styles.remove_text, styles.btn_text]}>Remove Quiz</Text>
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
	remove_btn: {
		borderColor: 'red'
	},
	btn_text: {
		textAlign: 'center',
		fontSize: 22
	},
	remove_text: {
		color: 'red'
	}
})

function mapStateToProps(state, props) {

	const currentDeck = props.navigation.state.params.title

	return {
		deck: currentDeck ? state[currentDeck] : {}
	}

}

export default connect(mapStateToProps)(DeckDetails)