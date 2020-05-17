import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {loadDecks} from '../store/ActionCreators.js';

class DeckListView extends React.Component {

  componentDidMount() {
    this.props.loadDecks();
  }

  renderDeck(deck) {
    return <View key={deck.id}>
      <Text>{deck.title}</Text>
      <Text>{deck.questions.length} cards</Text>
    </View>
  }

  render() {
    const decks = Object.values(this.props.decks);

    return <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={item => this.renderDeck(item.item)}
        keyExtractor={item => item.id}
      />
      <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('DeckDetail')}
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

const mapDispatchToProps = {loadDecks}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckListView);
