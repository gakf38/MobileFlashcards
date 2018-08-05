// React Imports
import React, { Component } from 'react'

// React Native Imports
import { Text, View, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Platform } from 'react-native'

// React Redux Imports
import { connect } from 'react-redux'

//
import { addDeck } from '../actions'

//
import { saveDeckTitle } from '../utils/helpers'

// React Navigation Imports
import { NavigationActions } from 'react-navigation'

class AddDeck extends Component {

	state = {
		input: '',
		error: false
	}

	handleTextChange = (input) => {

		this.setState(() => ({
			input
		}))

	}

	addDeck = () => {

		if ( this.state.input )
		{
			saveDeckTitle(this.state.input).then(() => {
				this.props.dispatch(addDeck(this.state.input))
			})

			this.toHome()
		}	
		else
		{
			this.setState(() => ({
				error: true
			}))
		}
	}

	toHome = () => {
		this.props.navigation.dispatch(NavigationActions.back('Home'))
	}

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>

				<KeyboardAvoidingView behavior='padding' style={styles.subContainer}>

					<TextInput 
						value={this.state.input}
						style={styles.input}
						placeholder='Deck Title'
						underlineColorAndroid='transparent'
						onChangeText={this.handleTextChange}
					/>

					{
						this.state.error && <Text style={{color: 'red'}}>Deck can not be added without a title</Text>
					}

					<TouchableOpacity 
						style={Platform.OS === 'ios' ? [styles.btn, styles.iosBtn] : [styles.btn, styles.androidBtn]}
						onPress={this.addDeck}
					>
						<Text>Add Deck</Text>
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
	input: {
		width: 300,
		height: 44,
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
	}
})

export default connect()(AddDeck)