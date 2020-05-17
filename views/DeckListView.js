import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Api from '../Api.js';

export default class DeckListView extends React.Component {

  constructor(props) {
    super(props);

    this.api = new Api();
    this.state = {decks: {}};
  }

  componentDidMount() {
    this.api.getDecks().then(data => this.setState({decks: data}));
  }

  renderDeck(deck) {
    return <View key={deck.id}>
      <Text>{deck.title}</Text>
      <Text>{deck.questions.length} cards</Text>
    </View>
  }

  render() {
    const decks = Object.values(this.state.decks);

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
