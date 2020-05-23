import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {loadDecks, selectDeck} from '../store/ActionCreators.js';

class DeckListView extends React.Component {

  componentDidMount() {
    this.props.loadDecks();
  }

  selectDeck(id) {
    this.props.navigation.navigate('Deck details');
    this.props.selectDeck(id);
  }

  renderDeck(deck) {
    return <TouchableOpacity key={deck.id} onPress={() => this.selectDeck(deck.id)}>
      <View style={styles.deck}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckCount}>{deck.questions.length} cards</Text>
      </View>
    </TouchableOpacity>;
  }

  render() {
    const decks = Object.values(this.props.decks);

    return <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={item => this.renderDeck(item.item)}
        keyExtractor={item => item.id}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  deck: {
    backgroundColor: '#e1f0eb',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    padding: 16
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  deckCount: {
    alignSelf: 'flex-end'
  }
});

const mapStateToProps = state => {
  return {
    decks: state.decks
  }
}

const mapDispatchToProps = {loadDecks, selectDeck}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckListView);
