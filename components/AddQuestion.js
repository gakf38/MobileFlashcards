// React Imports
import React, { Component } from 'react'

// React Native Imports
import { Text, View, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Platform } from 'react-native'

// React Navigation Imports
import { NavigationActions } from 'react-navigation'

class AddQuestion extends Component {

	state = {
		titleInput: '',
		questionInput: ''
	}

	handleTitleTextChange = (titleInput) => {
		this.setState(() => ({
			titleInput
		}))
	}

	handleQuestionTextChange = (questionInput) => {
		this.setState(() => ({
			questionInput
		}))
	}

	addQuestion = () => {

		// TODO: Trigger ADD QUESTION action

		this.toDetails()

	}

	toDetails = () => {
		this.props.navigation.dispatch(NavigationActions.back('DeckDetails'))
	}

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container} scrollable={false}>

				<KeyboardAvoidingView behavior='padding' style={styles.subContainer} enabled>

					<View>
						<Text style={styles.title}>Deck Title</Text>
					</View>

					<TextInput 
						value={this.state.titleInput}
						style={Platform.OS === 'ios' ? [styles.multilineInput, styles.iosInput] : [styles.multilineInput, styles.androidInput]}
						multiline={true}
						placeholder='Add the question here...'
						underlineColorAndroid='transparent'
						onChangeText={this.handleTitleTextChange}
					/>

					<TextInput 
						value={this.state.questionInput}
						style={Platform.OS === 'ios' ? [styles.multilineInput, styles.iosInput] : [styles.multilineInput, styles.androidInput]}
						multiline={true}
						placeholder='Add the answer here...'
						underlineColorAndroid='transparent'
						onChangeText={this.handleQuestionTextChange}
					/>

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

export default AddQuestion