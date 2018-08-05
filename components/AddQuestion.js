// React Imports
import React, { Component } from 'react'

// React Native Imports
import { Text, View, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Platform } from 'react-native'

// React Redux Imports
import { connect } from 'react-redux'

// Action Creator Imports
import { addCard } from '../actions'

// AsyncStorage Helpers Imports
import { addCardToDeck } from '../utils/helpers'

// React Navigation Imports
import { NavigationActions } from 'react-navigation'

class AddQuestion extends Component {

	state = {
		questionInput: '',
		answerInput: '',
		error: false
	}

	handleQuestionTextChange = (questionInput) => {
		this.setState(() => ({
			questionInput
		}))
	}

	handleAnswerTextChange = (answerInput) => {
		this.setState(() => ({
			answerInput
		}))
	}

	addQuestion = () => {

		if (this.state.questionInput !== '' && this.state.answerInput !== '') 
		{
			const deckTitle = this.props.title

			const newCard = {
				question: this.state.questionInput,
				answer: this.state.answerInput
			}

			addCardToDeck(deckTitle, newCard).then(() => {
				this.props.dispatch(addCard(deckTitle, newCard))
			})

			this.toDetails()
		}
		else
		{
			this.setState(() => ({
				error: true
			}))
		}

	}

	toDetails = () => {
		this.props.navigation.dispatch(NavigationActions.back('DeckDetails'))
	}

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container} scrollable={false}>

				<KeyboardAvoidingView behavior='padding' style={styles.subContainer} enabled>

					<View>
						<Text style={styles.title}>{this.props.title}</Text>
					</View>

					<TextInput 
						value={this.state.questionInput}
						style={Platform.OS === 'ios' ? [styles.multilineInput, styles.iosInput] : [styles.multilineInput, styles.androidInput]}
						multiline={true}
						placeholder='Add the question here...'
						underlineColorAndroid='transparent'
						onChangeText={this.handleQuestionTextChange}
					/>

					<TextInput 
						value={this.state.answerInput}
						style={Platform.OS === 'ios' ? [styles.multilineInput, styles.iosInput] : [styles.multilineInput, styles.androidInput]}
						multiline={true}
						placeholder='Add the answer here...'
						underlineColorAndroid='transparent'
						onChangeText={this.handleAnswerTextChange}
					/>

					{ this.state.error && <Text style={{color: 'red'}}>Card must include a question and an answer</Text> }

					<TouchableOpacity 
						style={Platform.OS === 'ios' ? [styles.btn, styles.iosBtn] : [styles.btn, styles.androidBtn]}
						onPress={this.addQuestion}
						>
						<Text>Add Card</Text>
					</TouchableOpacity>
					
				</KeyboardAvoidingView>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	subContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	title: {
		fontSize: 22
	},
	multilineInput: {
		width: 300,
		height: 132,
		padding: 8,
		margin: 25,
		borderWidth: 1
	},
	iosInput: {
		borderRadius: 7
	},
	androidInput: {
		borderRadius: 2
	},
	btn: {
		padding: 10,
		margin: 25,
		borderWidth: 1
	},
	iosBtn: {
		borderRadius: 7,
	},
	androidBtn: {
		borderRadius: 2,
	},
})

function mapStateToProps(state, props) {
	return {
		title: props.navigation.state.params.title
	}
}

export default connect(mapStateToProps)(AddQuestion)