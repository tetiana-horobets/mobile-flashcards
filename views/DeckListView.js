import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {loadDecks, selectDeck} from '../store/ActionCreators.js';

class DeckListView extends React.Component {

  componentDidMount() {
    this.props.loadDecks();
  }

  selectDeck(id) {
    this.props.navigation.navigate('DeckDetail');
    this.props.selectDeck(id);
  }

  renderDeck(deck) {
    return <TouchableOpacity key={deck.id} onPress={() => this.selectDeck(deck.id)}>
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    decks: state.decks,
  }
}

const mapDispatchToProps = {loadDecks, selectDeck}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckListView);
