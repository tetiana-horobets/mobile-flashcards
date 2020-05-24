import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import {deleteDeck} from '../store/ActionCreators.js';

class DeckDetailView extends React.Component {

  deleteDeck() {
    this.props.deleteDeck(this.props.selectedDeck);
    this.props.navigation.navigate('Home');
  }

  render() {
    if (!this.props.selectedDeck || !this.props.decks[this.props.selectedDeck]) {
      return <View style={styles.container}>
        <Text>Loading</Text>
      </View>;
    }

    const deck = this.props.decks[this.props.selectedDeck];
    return <View style={styles.container}>
      <Text style={styles.deckTitle}>{deck.title}</Text>
      <Text>{deck.questions.length} cards</Text>
      <View style={styles.button}>
        <Button
          title="Add card"
          onPress={() => this.props.navigation.navigate('NewCard')}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Start quiz"
          onPress={() => this.props.navigation.navigate('Quiz')}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Delete deck"
          onPress={() => this.deleteDeck()}
        />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 10
  }
});

const mapStateToProps = state => {
  return {
    decks: state.decks,
    selectedDeck: state.selectedDeck
  };
}

const mapDispatchToProps = {deleteDeck}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetailView);
