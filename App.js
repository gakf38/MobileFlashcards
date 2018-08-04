// React Imports
import React from 'react';

// React Native Imports
import { Text, View } from 'react-native';

import AddDeck from './components/AddDeck'
import AddQuestion from './components/AddQuestion'

export default class App extends React.Component {
  render() {
    return (
      <AddDeck />
    );
  }
}
