// React Imports
import React, { Component } from 'react'

// React Native Imports
import { Text, View, StyleSheet } from 'react-native'

class Quiz extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>Quiz</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 20
	}
})

export default Quiz