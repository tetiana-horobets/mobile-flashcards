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
      <Text>{deck.title}</Text>
      <Text>{deck.questions.length} cards</Text>
      <Button
        title="Delete deck"
        onPress={() => this.deleteDeck()}
      />
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
